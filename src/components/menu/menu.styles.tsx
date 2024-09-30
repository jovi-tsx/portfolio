import styled, { css } from 'styled-components'

export const Links = styled.div`
  ${({ theme }) => css`
    height: 100%;

    ul {
      list-style: none;
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: space-around;
      margin-right: 4.5rem;
      align-items: flex-end;

      @media (min-width: ${theme.screen.medium}) {
        margin-right: 12rem;
      }

      @media (min-width: ${theme.screen.large}) {
        align-items: flex-start;
        margin-left: ${theme.spacings.large};
        margin-right: 0;
      }

      @media (min-width: ${theme.screen.xxlarge}) {
        flex-direction: row;
        align-items: center;
        margin-left: 0;
      }

      button {
        font-weight: ${theme.font.bold};
        background: none;
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.secondary};
        outline: none;
        border: 0;

        @media (min-width: ${theme.screen.small}) {
          font-size: ${theme.font.sizes.huge};
        }

        &:hover,
        &:active {
          color: ${theme.colors.red};
        }
      }
    }
  `}
`

export const MenuContainer = styled.div<{ menuOpen: boolean }>`
  ${({ theme, menuOpen }) => css`
    height: calc(100vh - 7.8rem);
    position: fixed;
    left: -1rem;
    right: 0;
    top: 0;
    padding-top: 7.5rem;
    height: 100vh;
    pointer-events: ${menuOpen ? 'all' : 'none'};
    background-color: ${theme.colors.primary};
    z-index: ${theme.layers.menu};
    color: ${theme.colors.secondary};
    transform: translate3d(${menuOpen ? '0%, 0, 0' : '100%, 0, 0'});
    transition: transform 0.8s ease-in-out;
    transition-delay: ${!menuOpen && '0.3s'};
    border-left: 1rem solid ${theme.colors.red};

    ${Links} {
      opacity: ${+menuOpen};
      transition: opacity 0.3s linear;
      transition-delay: ${menuOpen && '0.8s'};
    }

    @media (min-width: ${theme.screen.large}) {
      padding-top: 0;
      left: 12rem;
      right: -1rem;
      border-left: none;
      border-right: 1rem solid ${theme.colors.red};
      transform: translate3d(${menuOpen ? '0%, 0, 0' : '-100%, 0, 0'});
    }
  `}
`
