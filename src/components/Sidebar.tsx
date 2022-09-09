import {
  ChatBubble,
  Film,
  Globe,
  Key,
  Login,
  Logout,
  Moon,
  Newspaper,
  Profile,
  Sun,
} from '@/components'
import { useAuth, useTheme } from '@/context'
import { InformationCircleIcon, MailIcon, PuzzleIcon, TicketIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Logo } from './svg'

export const Sidebar = ({ mobileNavToggled, close }) => {
  const router = useRouter()
  const { toggleTheme, isDarkMode } = useTheme()

  const { isAuthenticated, authdUser, logout } = useAuth()

  const chatRouteMatch = router.pathname.startsWith('/chat')
  const postRouteMatch = router.pathname.startsWith('/post')
  const userRouteMatch = router.pathname.startsWith('/user')
  const gameRouteMatch = router.pathname.startsWith('/game')
  const loginRouteMatch = router.pathname.startsWith('/account/login')
  const registerRouteMatch = router.pathname.startsWith('/account/register')
  const moreRouteMatch = router.pathname.startsWith('/account/register')

  const handleLogout = async () => {
    await logout()
    router.push('/account/login')
  }

  router.events?.on('routeChangeStart', () => {
    if (mobileNavToggled) {
      close()
    }
  })

  return (
    <nav>
      <ul className="flex flex-col w-full overflow-y-auto scrollbar select-none">
        <li className="flex flex-row items-center  cursor-pointer">
          <Link href="/">
            <div className="flex flex-row items-center h-12 pl-4 rounded-md">
              <div className="w-28 fill-current">
                <Logo />
              </div>
            </div>
          </Link>
        </li>
        <li className="px-3px mb-1">
          <Link href={`/games/stg/active`}>
            <div className={`sidebar-link ${gameRouteMatch ? 'sidebar-active-link' : ''}`}>
              <span className="flex items-center justify-center">
                <Film />
              </span>
              <span className="ml-4 mr-3 mb-1px lowercase">Stgs</span>
            </div>
          </Link>
        </li>

        <li className="px-3px mb-1">
          <Link href="/posts">
            <div className={`sidebar-link ${postRouteMatch ? 'sidebar-active-link' : ''}`}>
              <span className="flex items-center justify-center">
                <Newspaper />
              </span>
              <span className="ml-4 mr-3 mb-1px lowercase">Posts</span>
            </div>
          </Link>
        </li>
        <li className="px-3px mb-1">
          <Link href="/chat">
            <div className={`sidebar-link ${chatRouteMatch ? 'sidebar-active-link' : ''}`}>
              <span className="flex items-center justify-center">
                <ChatBubble />
              </span>
              <span className="ml-4 mr-3 mb-1px lowercase">Chat</span>
            </div>
          </Link>
        </li>

        <li className="px-3px mb-1">
          <Link href="/users">
            <div
              className={`sidebar-link ${
                userRouteMatch && router.asPath !== `/users/${authdUser?.username}`
                  ? 'sidebar-active-link'
                  : ''
              }`}
            >
              <span className="flex items-center justify-center">
                <Globe />
              </span>
              <span className="ml-4 mr-3 mb-1px lowercase">Users</span>
            </div>
          </Link>
        </li>

        <div className="line bg-nord4 dark:bg-nord2 h-2px my-4" />
        <li className="px-3px mb-1">
          <Link data-testid="sidebar-account-button" href="/account/login">
            <div className={`sidebar-link ${moreRouteMatch ? 'sidebar-active-link' : ''}`}>
              <span className="flex items-center justify-center">
                <InformationCircleIcon className="h-5 w-5" />
              </span>
              <span className="ml-4 mr-3 mb-1px lowercase">info</span>
            </div>
          </Link>
        </li>
        <li className="px-3px mb-1">
          <div className="sidebar-link" tabIndex={0} onClick={toggleTheme} onKeyPress={toggleTheme}>
            <span className="flex items-center justify-center">
              {isDarkMode ? <Sun /> : <Moon />}
            </span>
            <span className="ml-4 mr-3 mb-1px lowercase select-none">Theme</span>
          </div>
        </li>

        {isAuthenticated ? (
          <>
            <li className="px-3px mb-1">
              <Link href={`/users/${authdUser?.username}`}>
                <div
                  className={`sidebar-link ${
                    router.asPath === `/users/${authdUser?.username}` ? 'sidebar-active-link' : ''
                  }`}
                >
                  <span className="flex items-center justify-center">
                    <Profile />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Profile</span>
                </div>
              </Link>
            </li>
            <li className="px-3px mb-1">
              <div
                onClick={handleLogout}
                onKeyPress={handleLogout}
                className="sidebar-link"
                tabIndex={0}
              >
                <span className="flex items-center justify-center">
                  <Logout />
                </span>
                <span className="ml-4 mr-3 mb-1px lowercase">Logout</span>
              </div>
            </li>
          </>
        ) : (
          <>
            {/* <li className="px-3px mb-1">
              <Link data-testid="sidebar-account-button" href="/account/login">
                <div className={`sidebar-link ${loginRouteMatch ? 'sidebar-active-link' : ''}`}>
                  <span className="flex items-center justify-center">
                    <InformationCircleIcon className="h-5 w-5" />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Info</span>
                </div>
              </Link>
            </li>
            <li className="px-3px mb-1">
              <Link data-testid="sidebar-account-button" href="/account/login">
                <div className={`sidebar-link ${loginRouteMatch ? 'sidebar-active-link' : ''}`}>
                  <span className="flex items-center justify-center">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Feedback</span>
                </div>
              </Link>
            </li>
            <li className="px-3px mb-1">
              <Link data-testid="sidebar-account-button" href="/account/login">
                <div className={`sidebar-link ${loginRouteMatch ? 'sidebar-active-link' : ''}`}>
                  <span className="flex items-center justify-center">
                    <Login />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Settings</span>
                </div>
              </Link>
            </li> */}
            <li className="px-3px mb-1">
              <Link data-testid="sidebar-account-button" href="/account/login">
                <div className={`sidebar-link ${loginRouteMatch ? 'sidebar-active-link' : ''}`}>
                  <span className="flex items-center justify-center">
                    <Login />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Login</span>
                </div>
              </Link>
            </li>
            <li className="px-3px mb-1">
              <Link data-testid="sidebar-account-button" href="/account/register">
                <div className={`sidebar-link ${registerRouteMatch ? 'sidebar-active-link' : ''}`}>
                  <span className="flex items-center justify-center">
                    <Key />
                  </span>
                  <span className="ml-4 mr-3 mb-1px lowercase">Register</span>
                </div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
