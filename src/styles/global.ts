import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Graphik;
    src: local("Graphik Regular"),
      url("/fonts/graphik-regular.woff2") format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: Graphik;
    src: local("Graphik Medium"),
      url("/fonts/graphik-medium.woff2") format("woff2");
    font-weight: 500;
  }
  
  @font-face {
    font-family: Graphik;
    src: local("Graphik Semibold"),
      url("/fonts/graphik-semibold.woff2") format("woff2");
    font-weight: 600;
  }

  @font-face {
    font-family: Graphik;
    src: local("Graphik Bold"),
      url("/fonts/graphik-bold.woff2") format("woff2");
    font-weight: 700;
  }
  
  @font-face {
    font-family: Graphik;
    src: local("Graphik Black"),
      url("/fonts/graphik-black.woff2") format("woff2");
    font-weight: 800;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    cursor: none !important;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    #mouse-circle {
      position: absolute;
      width: 16px;
      height: 16px;
      margin: -8px 0 0 -8px;
      background-color: ${theme.colors.secondary};
      z-index: ${theme.layers.alwaysOnTop};
      border-radius: 50%;
      pointer-events: none;
      transition: width 0.3s, height 0.3s;
      transition-timing-function: ease;

      &.focus {
        width: 32px;
        height: 32px;
        margin: -16px 0 0 -16px;
      }

      @media (any-pointer: coarse) {
        display: none;
      }
    }

    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      overflow: hidden;
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;

      &:hover {
        color: ${theme.colors.red};
      }
    }

    .d-flex {
      display: flex;
    }

    .align-items-center {
      align-items: center;
    }

    .vertical-scrollbar {
      background-color: ${theme.colors.gray};
      border-radius: inherit;
    }

    .font-medium {
      font-weight: 500;
    }

    .text-red {
      color: ${theme.colors.red};
    }

    .text-justify {
      text-align: justify;
    }

    .text-md-justify {
      @media (min-width: ${theme.screen.medium}) {
        text-align: justify;
      }
    }

    .w-lg-90 {
      @media (min-width: ${theme.screen.large}) {
        max-width: 90%;
      }
    }

    .w-xxl-45 {
      @media (min-width: ${theme.screen.xxlarge}) {
        max-width: 45%;
      }
    }

    .lh-4 {
      line-height: 4rem;
    }

    .mt-1 {
      margin-top: ${theme.spacings.xxsmall};
    }

    .mt-2 {
      margin-top: ${theme.spacings.xsmall};
    }

    .mt-3 {
      margin-top: ${theme.spacings.small};
    }

    .my-4 {
      margin-top: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.medium};
    }

    .py-0 {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`
