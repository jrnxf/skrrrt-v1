import { COOKIES, isProduction, extractJwtClaims } from '@/utils'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition, isEqual } from 'apollo-utilities'
import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import Cookies from 'universal-cookie'
import merge from 'deepmerge'
import { useMemo } from 'react'

const cookies = new Cookies()

const httpLink = new HttpLink({
  fetch,
  uri: `${isProduction() ? 'https://graphql.skrrrt.io' : 'http://localhost:8080'}/v1/graphql`,
  fetchOptions: {
    rejectUnauthorized: false,
  },
})

const adminWsLink =
  typeof window !== 'undefined'
    ? new WebSocketLink({
        uri: `${isProduction() ? 'wss://graphql.skrrrt.io' : 'ws://localhost:8080'}/v1/graphql`,
        options: {
          reconnect: true,
          lazy: true,
          connectionCallback: (err, result) => {
            if (err) {
              console.log('An error occurred creating a websocket connection.')
            }
          },
          connectionParams: () => {
            const accessToken = cookies.get(COOKIES.AUTH.ACCESS_TOKEN)
            return {
              headers: {
                authorization: accessToken ? `Bearer ${accessToken}` : '',
                'x-hasura-role': 'admin',
              },
            }
          },
        },
      })
    : null

const wsLink =
  typeof window !== 'undefined'
    ? new WebSocketLink({
        uri: `${isProduction() ? 'wss://graphql.skrrrt.io' : 'ws://localhost:8080'}/v1/graphql`,
        options: {
          reconnect: true,
          lazy: true,
          connectionCallback: (err, result) => {
            if (err) {
              console.log('An error occurred creating a websocket connection.')
            }
          },
          connectionParams: (data: any) => {
            if (cookies.get(COOKIES.AUTH.ACCESS_TOKEN)) {
              return {
                headers: {
                  authorization: `Bearer ${cookies.get(COOKIES.AUTH.ACCESS_TOKEN)}`,
                },
              }
            } else {
              return {}
            }
          },
        },
      })
    : null

const adminRoleCheckLink =
  typeof window !== 'undefined'
    ? split(
        // This is called direction composition
        // https://www.apollographql.com/docs/react/api/link/introduction/#directional-composition
        (operation) => {
          // if the context defines the admin role, use the admin websocket connection
          return operation.getContext()?.headers?.['X-Hasura-Role'] === 'admin' || false
        },
        adminWsLink, // left
        wsLink, // right
      )
    : httpLink

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const operationAwareLink =
  typeof window !== 'undefined'
    ? split(
        // split based on operation type. This is called direction composition
        // https://www.apollographql.com/docs/react/api/link/introduction/#directional-composition
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
          )
        },
        adminRoleCheckLink, // left -- if the above test is true the adminRoleCheck will determine which wsLink to use
        httpLink, // right
      )
    : httpLink

const authTokenLink = setContext((_, { headers }) => {
  const token = cookies.get(COOKIES.AUTH.ACCESS_TOKEN)
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    }
  } else {
    return {
      headers: {
        ...headers,
      },
    }
  }
})

const tokenCheckLink = setContext(async () => {
  const token = cookies.get(COOKIES.AUTH.ACCESS_TOKEN)
  if (token) {
    const claims = extractJwtClaims(token)
    if (claims?.exp && moment(claims?.exp * 1000).isAfter(new Date())) {
      // access token is valid
      return
    }
  }
  await silentRefresh()
})

let refreshTokenExchangePromise = null

export const silentRefresh = async () => {
  try {
    if (!refreshTokenExchangePromise) {
      refreshTokenExchangePromise = axios.post('/api/auth/refresh-token')
      // this endpoint will set the access token via the 'set-cookie' header
    }

    const response = await refreshTokenExchangePromise
    const accessToken = response?.data?.accessToken

    refreshTokenExchangePromise = null

    return accessToken ?? null
  } catch (error) {
    // this could fail if the token is expired or not found -- in either case we don't really care
    // it just means the user will need to log back in
    return null
  }
}

const link = ApolloLink.from([
  // order matters here, think pipeline
  tokenCheckLink,
  authTokenLink,
  operationAwareLink,
])

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache(),
    connectToDevTools: !isProduction(),
  })
}

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // if a page has Next.js data fetching methods that use Apollo Client, the initial state gets hydrated here
  if (initialState) {
    // get existing cache, loaded during client side data fetching
    const existingCache: NormalizedCacheObject = _apolloClient.extract()

    // merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destArr, sourceArr) => [
        ...sourceArr,
        ...destArr.filter((d) => sourceArr.every((s) => !isEqual(d, s))),
      ],
    })

    // restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // for SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export const useApollo = (pageProps) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export default apolloClient
