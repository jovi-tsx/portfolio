import { useContext } from 'react'

import * as S from './menu-button.styles'

import { MenuContext } from 'contexts/app.context'

const MenuButton = () => {
  const { menuOpen, toggleMenu } = useContext(MenuContext)

  return (
    <S.Button onClick={toggleMenu} className={`${menuOpen ? 'opened' : ''}`}>
      <S.MenuIcon />
    </S.Button>
  )
}

export default MenuButton
