import React, { createContext, useMemo, useState } from 'react'
import { useCustomEffect } from '../Hooks'

export interface ThemeContextProps {
  theme: string
  setTheme: (theme: string) => void
}

export type SpacingOptions = 'compact' | 'comfort' | 'relax'
/**
 * Theme Context.
 */

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'default',
  setTheme: () => {},
})

/**
 * Theme Context Provider.
 *
 * @param value string
 * @param children ReactNode
 * @returns ReactNode
 */
export const ThemeContextProvider = ({
  value = 'default',
  children,
}: {
  value?: string
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState(value)

  /**
   * Apply theme to 'html' tag on DOM.
   *
   * @param theme string
   */
  const applyTheme = (themeName: string = 'default') => {
    const html = document.getElementsByTagName('html')[0]
    localStorage.setItem('theme', themeName)
    ;(html as any).setAttribute('data-theme', themeName)
  }

  useCustomEffect(() => {
    const storeTheme = localStorage.getItem('theme')
    applyTheme(storeTheme || 'default')
  }, [])

  /**
   * Handle Theme change.
   *
   * @param theme string
   */
  const handleThemeChange = (themeName: string) => {
    setTheme(themeName)
    applyTheme(themeName)
  }

  /**
   * Current context value for theme.
   */
  const val = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={val}>{children}</ThemeContext.Provider>
}
