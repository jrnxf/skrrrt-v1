import {
  AuthdUserByIdSubscriptionDocument,
  AuthdUserFragment,
  E_User_Roles_Enum,
  useAuthdUserByIdQueryLazyQuery,
  Users,
} from '@/types'
import { AUTH_STATES, COOKIES, extractJwtClaims, getApiDomain } from '@/utils'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useToasts } from 'react-toast-notifications'
import { useInterval } from '@/hooks'
import { silentRefresh } from '@/lib/apollo'

type RegisterProps = {
  full_name: string
  username: string
  email: string
  password: string
}

type ResetPasswordProps = {
  password: string
  resetPasswordToken: string
}

type LoginProps = { email: string; password: string }

type AuthContextProps = {
  authdUser: any
  isAdmin: boolean
  authState: AUTH_STATES
  isAuthenticated: boolean
  register: (args: RegisterProps) => Promise<void>
  login: (args: LoginProps) => Promise<void>
  logout: () => Promise<void>
  sendEmailVerificationEmail: (email: string) => Promise<void>
  sendResetPasswordEmail: (email: string) => Promise<void>
  resetPassword: (args: ResetPasswordProps) => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({
  authdUser: {
    email: 'test@skrrrt.io',
    full_name: 'Test User',
    id: '12345',
    token: 'abc123',
    username: 'testuser',
  },
  isAdmin: false,
  authState: AUTH_STATES.UNSET,
  isAuthenticated: true,
  register: async () => {},
  login: async () => {},
  logout: async (_shouldRoute?: boolean) => {},
  sendEmailVerificationEmail: async () => {},
  sendResetPasswordEmail: async () => {},
  resetPassword: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = (props) => {
  const router = useRouter()
  const [cookies] = useCookies()
  const { addToast } = useToasts()

  const [authdUser, setAuthdUser] = useState<any>(props.initialUser)
  const [authdUserUnsubscribeFn, setAuthdUserUnsubscribeFn] = useState<() => void>(() => {})
  const [authState, setAuthState] = useState<AUTH_STATES>(AUTH_STATES.UNSET)
  const [isAuthenticated, setIsAuthenticated] = useState(authState === AUTH_STATES.AUTHENTICATED)

  const [getAuthdUser, { subscribeToMore }] = useAuthdUserByIdQueryLazyQuery()

  const processToken = useCallback(async () => {
    let token = cookies[COOKIES.AUTH.ACCESS_TOKEN]
    if (token) {
      // access token is still valid
    } else {
      // attempting refresh
      token = await silentRefresh()
    }

    if (!token) {
      setAuthState(AUTH_STATES.UNAUTHENTICATED)
    }

    const decoded: { user: { id: number } } = extractJwtClaims(token)

    if (decoded?.user?.id) {
      hydrateUser(decoded.user.id)
    } else {
      setAuthState(AUTH_STATES.UNAUTHENTICATED)
    }
  }, [getAuthdUser, cookies])

  const hydrateUser = async (userId: number) => {
    const res = await getAuthdUser({
      variables: {
        id: userId,
      },
    })
    const hydratedAuthUser = res.data.users_by_pk

    if (hydratedAuthUser) {
      setAuthState(
        hydratedAuthUser.verified_email ? AUTH_STATES.AUTHENTICATED : AUTH_STATES.EMAIL_UNVERIFIED,
      )
      setAuthdUser(hydratedAuthUser as AuthdUserFragment)
    }
  }

  const isAdmin = isAuthenticated && (authdUser as Users)?.role === E_User_Roles_Enum.Admin

  const login = async ({ email, password }) => {
    // Not wrapped in a try catch because we want the consumer to handle errors
    const response = await axios.post(
      `/api/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    )

    const user = response?.data

    if (user?.id) {
      await hydrateUser(user.id)

      router.push((router?.query?.redirect as string) || '/')
    }
  }

  const register = async ({ full_name, username, email, password }) => {
    // Not wrapped in a try catch because we want the consumer to handle errors
    const response = await axios.post(
      `/api/auth/register`,
      {
        full_name,
        username,
        email,
        password,
      },
      {
        withCredentials: true,
      },
    )

    const user = response?.data

    // NOTE: It is intentional that we don't setAuthdUser here because the user's email is still unverified
    if (user.id) {
      addToast(`Verification email sent!`, {
        appearance: 'success',
      })
    }
  }

  const handleResetPassword = async ({ password, resetPasswordToken }: ResetPasswordProps) => {
    await axios.post(
      `/api/auth/reset-password`,
      {
        token: resetPasswordToken,
        password,
      },
      {
        withCredentials: true,
      },
    )
  }

  const sendEmailVerificationEmail = async (email?: string) => {
    await axios.get(`/api/send/${email}/verify-email`)
    addToast(`Verification email sent!`, { appearance: 'success' })
  }

  const sendResetPasswordEmail = async (email) => {
    await axios.get(`/api/send/${email}/reset-password`)
    addToast(`Reset password email sent!`, { appearance: 'success' })
  }

  const logout = async (shouldRoute = true) => {
    await axios.post('/api/auth/logout')

    if (authdUserUnsubscribeFn) authdUserUnsubscribeFn()

    setAuthdUser(null)
    setAuthState(AUTH_STATES.UNAUTHENTICATED)

    shouldRoute && router.push('/account/login')
  }

  useEffect(() => {
    setIsAuthenticated(authState === AUTH_STATES.AUTHENTICATED)
  }, [authState])

  useEffect(() => {
    processToken()
  }, [processToken])

  useEffect(() => {
    try {
      if (authdUser?.id && subscribeToMore) {
        const unsubFn = subscribeToMore({
          document: AuthdUserByIdSubscriptionDocument,
          variables: {
            id: authdUser?.id,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            if (subscriptionData?.data?.users_by_pk) {
              return subscriptionData.data
            } else {
              return previousStore
            }
          },
        })

        /**
         * It is possible to set a function in state using hooks, but because state can be
         * initialized and updated with a function that returns the initial state or the
         * updated state, you need to supply a function that in turn returns the function
         * you want to put in state.
         *
         * https://stackoverflow.com/a/55621325
         */
        setAuthdUserUnsubscribeFn(() => () => unsubFn?.())

        return () => {
          unsubFn?.()
        }
      }
    } catch {
      // bad unsubscribe
    }
  }, [subscribeToMore, authdUser])

  return (
    <AuthContext.Provider
      value={{
        authdUser,
        authState,
        isAuthenticated,
        isAdmin,
        register,
        login,
        logout,
        sendEmailVerificationEmail,
        sendResetPasswordEmail,
        resetPassword: handleResetPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
