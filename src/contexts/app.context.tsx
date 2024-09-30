import React, { createContext, FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import theme from 'styles/theme'

type TDarkModeContext = {
  darkMode: 'dark' | 'light'
  toggleDarkMode: () => void
}

type TMenuContext = {
  menuOpen: boolean
  toggleMenu: () => void
}

export const DarkModeContext = createContext<TDarkModeContext>({
  darkMode: 'dark',
  toggleDarkMode: () => null,
})

export const MenuContext = createContext<TMenuContext>({
  menuOpen: false,
  toggleMenu: () => null,
})

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<'dark' | 'light'>('dark')
  const toggleDarkMode = () =>
    setDarkMode(darkMode === 'dark' ? 'light' : 'dark')

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const darkModeValue = { darkMode, toggleDarkMode }
  const menuValue = { menuOpen, toggleMenu }

  return (
    <DarkModeContext.Provider value={darkModeValue}>
      <MenuContext.Provider value={menuValue}>
        <ThemeProvider theme={theme[`${darkMode}Theme`]}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </MenuContext.Provider>
    </DarkModeContext.Provider>
  )
}
