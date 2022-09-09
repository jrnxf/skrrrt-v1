import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

const BuildPage = ({ env, sha }) => {
  return (
    <>
      <Head>
        <title>skrrrt | build</title>
      </Head>

      <div className="w-full max-w-3xl mx-auto text-3xl">
        <div className="flex flex-col items-center justify-center font-semibold ">
          <div>
            sha: <span className="text-secondary">{sha?.slice(0, 10)}</span>
          </div>
          <div>
            env: <span className="text-secondary">{env}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BuildPage

export const getStaticProps: GetStaticProps = async () => {
  // NOTE: you can't call the the /api endpoint here because during build time
  // those endpoints aren't available yet 😜
  return {
    props: {
      sha: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
      env: process.env.NODE_ENV || 'unknown',
    },
  }
}
