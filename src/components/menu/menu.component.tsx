import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { MenuContext } from 'contexts/app.context'

import * as S from './menu.styles'

const Menu = () => {
  const { menuOpen, toggleMenu } = useContext(MenuContext)
  const { t } = useTranslation()

  const aboutScroll = () => {
    toggleMenu()
    document
      .getElementById('about')
      ?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  const abilitiesScroll = () => {
    toggleMenu()
    document
      .getElementById('abilities')
      ?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  const contactScroll = () => {
    toggleMenu()
    document
      .getElementById('footer')
      ?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  return (
    <S.MenuContainer menuOpen={menuOpen}>
      <S.Links>
        <ul>
          <li>
            <button onClick={aboutScroll}>{t('aboutNav')}</button>
          </li>
          <li>
            <button onClick={abilitiesScroll}>{t('abilitiesNav')}</button>
          </li>
          <li>
            <button onClick={contactScroll}>{t('contactNav')}</button>
          </li>
        </ul>
      </S.Links>
    </S.MenuContainer>
  )
}

export default Menu
