import { HeaderLine, Logo, UserTile } from '@/components'
import Head from 'next/head'
import React from 'react'
import { useLastStgTopThree } from '@/hooks'
import converter from 'number-to-words'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
  const lastStgTopThree = useLastStgTopThree()
  return (
    <>
      <Head>
        <title>skrrrt</title>
      </Head>
      <main>
        <div
          className="flex flex-col items-center max-w-3xl pt-16 mx-auto md:pt-24"
          data-testid="landing-page"
        >
          <div className="w-full max-w-xl px-8 mb-4 fill-current md:mb-6 md:max-w-2xl xl:max-w-3xl text-primary">
            <Logo />
          </div>
          <p className="text-2xl font-medium md:text-3xl xl:text-4xl">a une collective</p>
          <div className="w-full max-w-6xl mx-auto">
            {lastStgTopThree.length > 0 && (
              <div className="w-full mt-10">
                <div className="mb-6">
                  <HeaderLine text={`podium`} />
                </div>
                <div className="grid w-full grid-cols-1 mx-auto gap-y-4">
                  {lastStgTopThree.map((t3, idx) => (
                    <div className="relative" key={idx}>
                      <UserTile user={t3.player} />
                      <div className="absolute top-0 right-0 pt-2 pr-3 text-xl font-bold">
                        {converter.toOrdinal(idx + 1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
