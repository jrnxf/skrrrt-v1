/* This example requires Tailwind CSS v2.0+ */
import { KeyboardLink, Logo, UserAvatar } from '@/components'
import { useAuth, useTheme } from '@/context'
import { useClickawayListener } from '@/hooks'
import { classNames } from '@/utils'
import {
  BeakerIcon,
  CashIcon,
  ChatIcon,
  DocumentTextIcon,
  DotsHorizontalIcon,
  GlobeIcon,
  LoginIcon,
  LogoutIcon,
  MailIcon,
  MenuIcon,
  MoonIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  SunIcon,
  UserCircleIcon,
  VideoCameraIcon,
  XIcon,
} from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { Logger } from '@/middleware'

export const Navbar = () => {
  const router = useRouter()
  const { authdUser, isAuthenticated, logout } = useAuth()
  const { toggleTheme, isDarkMode } = useTheme()

  const navigation = [
    {
      name: 'games',
      href: '/games/stg/active',
      icon: <VideoCameraIcon className="w-6 h-6 mr-2" />,
      active: router.pathname.startsWith('/game'),
    },
    {
      name: 'posts',
      href: '/posts',
      icon: <NewspaperIcon className="w-6 h-6 mr-2" />,
      active: router.pathname.startsWith('/posts'),
    },
    {
      name: 'chat',
      href: '/chat',
      icon: <ChatIcon className="w-6 h-6 mr-2" />,
      active: router.pathname.startsWith('/chat'),
    },
    {
      name: 'users',
      href: '/users',
      icon: <GlobeIcon className="w-6 h-6 mr-2" />,
      active: router.pathname.startsWith('/users'),
    },
  ]

  const [isAtTopOfWindow, setIsAtTopOfWindow] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false)
  const navRef = useRef(null)
  const secondaryNavRef = useRef(null)

  const checkWindowScrollPos = () => {
    setIsAtTopOfWindow(window?.scrollY < 15)
  }

  useEffect(() => {
    checkWindowScrollPos() // to start
    window.addEventListener('scroll', checkWindowScrollPos)

    return () => {
      window.removeEventListener('scroll', checkWindowScrollPos)
    }
  }, [checkWindowScrollPos])

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setMobileNavOpen(false)
      setSecondaryNavOpen(false)
    })
  }, [])

  useClickawayListener(navRef, () => {
    setMobileNavOpen(false)
  })

  useClickawayListener(secondaryNavRef, () => {
    setSecondaryNavOpen(false)
  })

  return (
    <nav ref={navRef}>
      <div
        className={classNames(
          'p-2 md:px-6 lg:px-8 bg-primary',
          !mobileNavOpen &&
            !isAtTopOfWindow &&
            'border-b-2 border-nord6 dark:border-nord0 shadow-sm',
        )}
      >
        <div className="relative flex items-center justify-between">
          <div
            className="absolute inset-y-0 left-0 flex items-center md:hidden"
            onClick={() => {
              setMobileNavOpen(!mobileNavOpen)
            }}
          >
            {/* Mobile menu button*/}
            <button className="inline-flex items-center justify-center px-3 py-2 rounded-md text-secondary hover:bg-nord6 dark:hover:bg-nord0 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nord6 dark:focus:ring-nord0">
              <span className="sr-only">Open main menu</span>
              {mobileNavOpen ? (
                <XIcon className="block w-5 h-5" aria-hidden="true" />
              ) : (
                <MenuIcon className="block w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 md:justify-between">
            <KeyboardLink href="/">
              <div className="h-full px-3 py-2 cursor-pointer fill-current w-36">
                <Logo />
              </div>
            </KeyboardLink>
            <div className="hidden md:block md:ml-6">
              <ul className="flex justify-end space-x-3">
                {navigation.map((item) => (
                  <li
                    tabIndex={0}
                    key={item.name}
                    onClick={() => {
                      Logger.info(item.name)
                      router.push(item.href)
                    }}
                    onKeyPress={() => router.push(item.href)}
                    className="rounded-md keyboard-focus-visible"
                  >
                    <div
                      className={classNames(
                        item.active
                          ? 'bg-nord5 dark:bg-nord1'
                          : 'hover:border-nord5 dark:hover:border-nord1',
                        'px-2 py-1 border-3 border-transparent rounded-md font-medium cursor-pointer select-none flex items-center',
                      )}
                    >
                      {item.icon}
                      <div className="text-lg">{item.name}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <div className="relative">
              <div onClick={() => setSecondaryNavOpen(!secondaryNavOpen)}>
                <button
                  className="flex items-center justify-center text-sm border-2 rounded-full w-9 h-9 bg-nord6 dark:bg-nord0 text-secondary focus:outline-none border-nord4 dark:border-nord1 keyboard-focus-visible"
                  tabIndex={0}
                >
                  <span className="sr-only">Open user menu</span>

                  {authdUser ? (
                    <div className="w-8 h-8 rounded-full">
                      <UserAvatar
                        user={authdUser}
                        initialsClasses="bg-nord5 dark:bg-nord1 text-xs"
                        routingEnabled={false}
                      />
                    </div>
                  ) : (
                    <DotsHorizontalIcon className="w-6 h-6 text-nord1 dark:text-nord4 m-2px" />
                  )}
                </button>
              </div>

              {secondaryNavOpen && (
                <div className="absolute right-0 z-10 top-10" ref={secondaryNavRef}>
                  <div className="absolute right-0 mt-2 tracking-wide origin-top-right border-2 rounded-md shadow-sm cursor-pointer w-52 dark:bg-nord0 bg-nord6 text-secondary dark:border-nord1 border-nord5 focus:outline-none">
                    {isAuthenticated ? (
                      <>
                        <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                          <KeyboardLink
                            href={`/users/${authdUser?.username}`}
                            className="w-full"
                            fullWidth
                          >
                            <div className="flex items-center px-3 py-2 hover:bg-black-4 dark:hover:bg-black-24">
                              <UserCircleIcon className="w-6 h-6 ml-1 mr-4" />
                              <div>profile</div>
                            </div>
                          </KeyboardLink>
                        </div>
                        <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                          <div
                            onClick={logout}
                            onKeyPress={logout}
                            className="flex items-center px-3 py-2 keyboard-focus-visible"
                            tabIndex={0}
                          >
                            <LogoutIcon className="w-6 h-6 ml-1 mr-4" />
                            <div>logout</div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                        <KeyboardLink
                          href={`/account/login${
                            router.asPath !== '/account/login' // not already on login page
                              ? `?redirect=${router.asPath}`
                              : ''
                          }`}
                          fullWidth
                        >
                          <div className="flex items-center px-3 py-2">
                            <LoginIcon className="w-6 h-6 ml-1 mr-4" />
                            <div>login</div>
                          </div>
                        </KeyboardLink>
                      </div>
                    )}

                    <div
                      className="flex items-center px-3 py-2 text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1 keyboard-focus-visible"
                      onClick={toggleTheme}
                      tabIndex={0}
                    >
                      {isDarkMode ? (
                        <SunIcon className="w-6 h-6 ml-1 mr-4" />
                      ) : (
                        <MoonIcon className="w-6 h-6 ml-1 mr-4" />
                      )}

                      <div>theme</div>
                    </div>

                    <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                      <KeyboardLink href="/terms" fullWidth>
                        <div className="flex items-center px-3 py-2">
                          <DocumentTextIcon className="w-6 h-6 ml-1 mr-4" />
                          <div>terms</div>
                        </div>
                      </KeyboardLink>
                    </div>

                    <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                      <KeyboardLink href="/privacy" fullWidth>
                        <div className="flex items-center px-3 py-2">
                          <ShieldCheckIcon className="w-6 h-6 ml-1 mr-4" />

                          <div>privacy</div>
                        </div>
                      </KeyboardLink>
                    </div>

                    <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                      <KeyboardLink href="/build" fullWidth>
                        <div className="flex items-center px-3 py-2">
                          <BeakerIcon className="w-6 h-6 ml-1 mr-4" />
                          <div>build</div>
                        </div>
                      </KeyboardLink>
                    </div>
                    {/* END INFO */}

                    <div className="text-lg border-b-2 dark:border-nord1 border-nord5 hover:bg-nord5 dark:hover:bg-nord1">
                      <KeyboardLink href="/feedback" fullWidth>
                        <div className="flex items-center px-3 py-2">
                          <MailIcon className="w-6 h-6 ml-1 mr-4" />
                          <div>feedback</div>
                        </div>
                      </KeyboardLink>
                    </div>

                    <div
                      className="flex items-center justify-between text-lg hover:bg-nord5 dark:hover:bg-nord1 keyboard-focus-visible"
                      onClick={() => window.open('https://patreon.com/skrrrt', '_blank')}
                      tabIndex={0}
                    >
                      <div className="flex items-center px-3 py-2">
                        <CashIcon className="w-6 h-6 ml-1 mr-4" />

                        <div>donate</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="px-3 py-2 border-b-2 shadow-sm md:hidden bg-primary border-nord4 dark:border-nord1">
          {navigation.map((item) => (
            <KeyboardLink
              key={item.name}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
            >
              <div
                className={classNames(
                  item.active
                    ? 'bg-nord5 dark:bg-nord1'
                    : 'hover:border-nord5 dark:hover:border-nord1',
                  'px-2 py-1 mb-1.5 border-3 flex items-center text-lg border-transparent rounded-md font-medium cursor-pointer select-none',
                )}
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </div>
            </KeyboardLink>
          ))}
        </div>
      )}
    </nav>
  )
}
