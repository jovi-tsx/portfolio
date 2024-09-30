import styled, { css } from 'styled-components'
import type { LoadingProps } from './loading.component'

export const LoadingBar = styled.div`
  width: 100%;
`

export const Data = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: ${theme.colors.secondary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Message = styled.p``

export const Percentage = styled.p`
  ${({ theme }) => css`
    display: none;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.semibold};

    @media (min-width: ${theme.screen.small}) {
      display: inline-block;
    }
  `}
`

export const ProgressBar = styled.div``

export const Wrapper = styled.div<LoadingProps>`
  ${({ theme, percentage }) => css`
    display: flex;
    pointer-events: none;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: -1rem;
    left: 0;
    right: 0;
    border-bottom: 1rem solid ${theme.colors.red};
    background-color: ${theme.colors.primary};
    z-index: ${theme.layers.loading};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    transform: translate3d(${percentage === 100 ? '0, -100%, 0' : '0, 0%, 0'});
    transition: transform 0.8s ease-in-out;
    transition-delay: 0.3s;

    @media (min-width: ${theme.screen.medium}) {
      padding: 4.5rem 12rem;
      align-items: flex-end;
    }

    ${LoadingBar} {
      opacity: ${+(percentage !== 100)};
      transition: opacity 0.3s linear;
    }

    ${ProgressBar} {
      position: relative;

      > div {
        &:first-child {
          width: 100%;
          background-color: ${theme.colors.secondary};
          height: 5px;
        }

        &:last-child {
          width: ${percentage}%;
          background-color: ${theme.colors.red};
          height: 5px;
          position: absolute;
          top: 0;
          left: 0;
          transition: width 0.6s ease;
        }
      }
    }

    ${Message} {
      font-size: ${theme.font.sizes.medium};

      &:after {
        width: 0rem;
        overflow: hidden;
        content: '\u2026';
        display: inline-block;
        vertical-align: bottom;
        -webkit-animation: ellipsis steps(4, end) 1.5s infinite;
        animation: ellipsis steps(4, end) 1.5s infinite;
        animation-play-state: ${percentage === 100 ? 'paused' : 'running'};
      }

      @keyframes ellipsis {
        to {
          width: 2.5rem;
        }
      }

      @-webkit-keyframes ellipsis {
        to {
          width: 2.5rem;
        }
      }
    }
  `}
`
