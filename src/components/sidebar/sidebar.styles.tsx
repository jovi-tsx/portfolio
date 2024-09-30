import styled, { css } from 'styled-components'

export const SidebarContainer = styled.nav`
  ${({ theme }) => css`
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12rem;
    padding: 4.5rem;
    grid-template-rows: repeat(3, 1fr);
    border-right: 0.1rem solid ${theme.colors.darkGray};
    background-color: ${theme.colors.primary};
    z-index: ${theme.layers.alwaysOnTop};

    svg {
      width: 3rem;
      height: auto;
    }

    @media (min-width: ${theme.screen.large}) {
      display: grid;
    }

    button {
      background: none;
      color: ${theme.colors.secondary};
      padding: 0;
      margin: 0;
      outline: none;
      border: 0;
      width: 3rem;
      height: 3rem;
    }
  `}
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a:not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const DarkModeButton = styled.button``

export const LanguageButton = styled.button`
  ${({ theme }) => css`
    align-self: end;
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    letter-spacing: 0.1rem;
  `}
`
