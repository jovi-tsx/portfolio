import styled, { css } from 'styled-components'
import type { HomeProps } from './home.component'

import { Container } from '@components/container/container.styles'
import { Heading } from '@components/heading/heading.styles'
import {
  DarkModeButton,
  LanguageButton,
} from '@components/sidebar/sidebar.styles'

import ArrowScroll from '@assets/arrow-scroll.svg?component'

export const MainContainer = styled.div<HomeProps>`
  ${({ theme, percentage }) => css`
    opacity: ${+(percentage === 100)};

    @media (min-width: ${theme.screen.large}) {
      padding-left: 12rem;
    }
  `}
`

export const DMButton = styled(DarkModeButton)`
  display: flex;
`

export const LangButton = styled(LanguageButton)`
  ${({ theme }) => css`
    font-size: 30px;
    font-weight: ${theme.font.normal};
    letter-spacing: 1px;
  `}
`

export const MobileNav = styled(Container)<{ menuOpen: boolean }>`
  ${({ theme }) => css`
    text-align: right;
    display: flex;
    top: 0;
    position: relative;
    justify-content: flex-end;
    padding-top: ${theme.spacings.small};
    padding-bottom: 0;
    z-index: ${theme.layers.alwaysOnTop};

    button {
      background: none;
      font-size: 30px;
      color: ${theme.colors.secondary};
      margin-right: ${theme.spacings.small};
      outline: none;
      border: 0;

      &:hover,
      &:active {
        color: ${theme.colors.red};
      }

      &:last-child {
        transform: scale(-1, 1);
        margin-right: 0;
      }
    }

    @media (min-width: ${theme.screen.large}) {
      display: none;
    }
  `}
`

export const ScrollIcon = styled(ArrowScroll)`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    bottom: 4.5rem;
    right: 12rem;

    @media (min-width: ${theme.screen.xlarge}) {
      display: block;
    }
  `}
`

export const Intro = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    position: relative;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      font-size: 3.6rem;

      > li {
        &:not(:last-child) {
          margin-right: ${theme.spacings.xsmall};
        }

        > a {
          display: flex;
          padding: 1.5rem;
          background-color: ${theme.colors.red};
          border-radius: 50%;
          color: #ffffff;

          &:hover,
          &:focus,
          &:active {
            background-color: ${theme.colors.darkRed};
          }
        }
      }
    }

    @media (min-width: ${theme.screen.medium}) {
      padding-top: 0;
      padding-bottom: 0;
      height: calc(100vh - 7.8rem);
    }

    @media (min-width: ${theme.screen.large}) {
      height: 100vh;
    }
  `}
`

export const Hello = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.black};
    font-size: ${theme.font.sizes.medium};

    > span {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.red};
      font-weight: ${theme.font.bold};
    }

    @media (min-width: ${theme.screen.small}) {
      font-size: ${theme.font.sizes.large};

      > span {
        font-size: 14rem;
      }
    }
  `}
`

export const Slide = styled.div`
  ${({ theme }) => css`
    width: 100%;
    overflow: hidden;
    margin: ${theme.spacings.medium} 0;

    @media (min-width: ${theme.screen.medium}) {
      margin: ${theme.spacings.huge} 0;
    }
  `}
`

export const About = styled(Container)``

export const Abilities = styled(Container)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    @media (min-width: ${theme.screen.medium}) {
      margin: ${theme.spacings.huge} 0;
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    padding-bottom: ${theme.spacings.medium};

    ${Heading} > span {
      margin-bottom: 1.5rem;
    }

    ul {
      list-style: none;
      font-size: ${theme.font.sizes.small};

      > li {
        display: inline-block;

        &:not(:last-child) {
          margin-right: ${theme.spacings.xsmall};
        }
      }

      @media (min-width: ${theme.screen.small}) {
        font-size: ${theme.font.sizes.medium};

        &:not(:last-child) {
          margin-right: ${theme.spacings.small};
        }
      }
    }

    @media (min-width: ${theme.screen.medium}) {
      padding: ${theme.spacings.xlarge} 0 ${theme.spacings.small};
    }
  `}
`

export const Email = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    padding-bottom: 1rem;
    border-bottom: 0.3rem solid;
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.medium};

    &:hover {
      border-color: ${theme.colors.red};
    }

    @media (min-width: ${theme.screen.small}) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const Copyright = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    padding-top: 0;
    padding-bottom: 0;

    @media (min-width: ${theme.screen.large}) {
      text-align: right;
    }
  `}
`
