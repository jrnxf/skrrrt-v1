import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const AccessDenied = () => {
  return (
    <>
      <Head>
        <title>skrrrt | access denied</title>
      </Head>
      <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
        <div className="mb-3 page-title">
          <span role="img" aria-label="access denied">
            🚨
          </span>
          <span className="page-title mx-2">access denied</span>
          <span role="img" aria-label="access denied">
            🚨
          </span>
        </div>
        <p className="text-sm font-bold mb-4">You don't have permission to view this page</p>
      </div>
    </>
  )
}

export default AccessDenied
