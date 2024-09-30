import { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'

import { DarkModeContext } from 'contexts/app.context'

import MenuButton from '@components/menu-button/menu-button.component'
import * as S from './sidebar.styles'

const Sidebar = () => {
  const [lang, setLang] = useState('en')
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
  const { t, i18n } = useTranslation()

  const changeLanguageHandler = () => {
    const newLang = lang === 'en' ? 'br' : 'en'

    i18n.changeLanguage(newLang)
    setLang(newLang)
  }

  return (
    <S.SidebarContainer>
      <MenuButton />
      <S.CenterContainer>
        <S.DarkModeButton onClick={toggleDarkMode}>
          {darkMode === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
        </S.DarkModeButton>
      </S.CenterContainer>
      <S.LanguageButton color="secondary" onClick={changeLanguageHandler}>
        {t('language')}
      </S.LanguageButton>
    </S.SidebarContainer>
  )
}

export default Sidebar
