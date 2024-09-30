import styled, { css } from 'styled-components'
import { Text } from '@components/text/text.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    div {
      max-width: 100%;
      overflow: hidden;
      position: relative;
      height: 70px;

      ${Text} {
        color: ${theme.colors.red};
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.semibold};
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        position: absolute;

        > span {
          display: inline-block;
          padding-left: 100%;

          &:not(.reverse) {
            animation: marquee 40s linear infinite;
          }

          &.reverse {
            animation: marqueeReverse 40s linear infinite;
          }
        }

        &:last-child > span {
          animation-delay: -20s;
        }
      }

      @keyframes marquee {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-100%, 0, 0);
        }
      }

      @keyframes marqueeReverse {
        0% {
          transform: translate3d(-100%, 0, 0);
        }
        100% {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  `}
`
