import { User } from '@/components'
import { addApolloState, initializeApollo } from '@/lib/apollo'
import { Logger } from '@/middleware'
import { UserByUsernameQuery, UserByUsernameQueryDocument } from '@/types'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const UserPage: NextPage = () => {
  const router = useRouter()

  return <User username={router.query.username as string} />
}

export default UserPage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  Logger.info(`${ctx.req.method} ${ctx.req.url}`)

  const apolloClient = initializeApollo()

  await apolloClient.query<UserByUsernameQuery>({
    query: UserByUsernameQueryDocument,
    variables: {
      username: ctx.params.username,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
