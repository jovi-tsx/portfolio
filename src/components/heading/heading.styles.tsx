import styled, { css } from 'styled-components'
import { HeadingProps } from './heading.component'

export const HeadingLabel = styled.span`
  ${({ theme }) => css`
    text-transform: uppercase;
    color: ${theme.colors.lightGray};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.xsmall};
    display: inline-block;
    width: 100%;

    @media (min-width: ${theme.screen.small}) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Heading = styled.div<HeadingProps>`
  ${({
    theme,
    color = 'secondary',
    size = 'xlarge',
    weight = 'semibold',
  }) => css`
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors[color]};
      font-weight: ${theme.font[weight]};
      font-size: 3.6rem;

      &:first-letter {
        margin-left: -0.3rem;
      }

      @media (min-width: ${theme.screen.small}) {
        font-size: ${theme.font.sizes[size]};
      }
    }
  `}
`
