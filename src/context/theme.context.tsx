import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { classNames, COOKIES } from '@/utils'
import { parseCookies } from 'nookies'
import moment from 'moment'

const _cookies = new Cookies()

type ThemeContextProps = {
  toggleTheme: () => any
  isDarkMode?: boolean
}
export const ThemeContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  isDarkMode: undefined,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: any) => {
  const cookies = parseCookies()

  const [isDarkMode, setIsDarkMode] = useState(
    cookies?.[COOKIES.THEME] ? (cookies?.[COOKIES.THEME] === 'dark' ? true : false) : true,
  )

  const toggleTheme = () => {
    let newModeIsDarkMode = !isDarkMode
    _cookies.set(COOKIES.THEME, newModeIsDarkMode ? 'dark' : 'light', {
      path: '/',
      expires: moment().add(5, 'year').toDate(),
    })
    setIsDarkMode(newModeIsDarkMode)
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDarkMode,
      }}
    >
      <main className={classNames(isDarkMode && 'dark')}>
        <section className="bg-primary text-primary">{children}</section>
      </main>
    </ThemeContext.Provider>
  )
}
