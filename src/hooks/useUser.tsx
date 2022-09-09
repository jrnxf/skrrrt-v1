import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { useAuth } from '@/context'
import {
  E_User_Locations_Enum,
  useLikeUserMutation,
  UserByUsernameSubscriptionDocument,
  Users,
  User_Locations,
  useUnlikeUserMutation,
  useUserByUsernameQuery,
} from '@/types'
import { AUTH_STATES } from '@/utils'

export const useUser = (username: string) => {
  const { authdUser, authState } = useAuth()
  const { addToast } = useToasts()
  const [user, setUser] = useState<Users>()
  const [hometown, setHometown] = useState<User_Locations>()
  const [current, setCurrentLocation] = useState<User_Locations>()
  const { loading, error, data, subscribeToMore } = useUserByUsernameQuery({
    variables: {
      username,
    },
  })
  const [likeUser] = useLikeUserMutation()
  const [unlikeUser] = useUnlikeUserMutation()

  const handleUserFavorite = async () => {
    if (user) {
      if (authState !== AUTH_STATES.AUTHENTICATED) {
        addToast(`You must login to like users.`, {
          appearance: 'info',
          autoDismiss: true,
        })
      } else if (user.id === authdUser?.id) {
        addToast(`You can only like other users.`, {
          appearance: 'info',
        })
      } else if (user) {
        if (user.liked_users.some((like) => like.liked_by_user_id === authdUser?.id)) {
          await unlikeUser({
            variables: {
              liked_user_id: user.id,
            },
          })
        } else {
          await likeUser({
            variables: {
              liked_user_id: user.id,
            },
          })
        }
      }
    }
  }

  useEffect(() => {
    if (!error && !loading && data) {
      const [user] = data.users as Users[]
      setCurrentLocation(user?.locations?.find((l) => l.type === E_User_Locations_Enum.Current))
      setHometown(user?.locations?.find((l) => l.type === E_User_Locations_Enum.Hometown))
      setUser(user)
    }
  }, [loading, error, data])

  useEffect(() => {
    if (username) {
      try {
        const unsubFn = subscribeToMore({
          document: UserByUsernameSubscriptionDocument,
          variables: {
            username,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            if (subscriptionData?.data?.users) {
              return subscriptionData.data
            } else {
              return previousStore
            }
          },
        })

        return () => {
          unsubFn?.()
        }
      } catch {
        // bad unsubscribe
      }
    }
  }, [subscribeToMore, username])

  return {
    current,
    hometown,
    user: data?.users?.[0],
    handleUserFavorite,
  }
}
