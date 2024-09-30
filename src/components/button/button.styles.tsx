import styled, { css } from 'styled-components'
import { ButtonProps } from './button.component'

export const BaseButton = styled.button<ButtonProps>`
  ${({ theme, color = 'red' }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    background-color: ${theme.colors[color]};
    border: ${theme.borders.small} solid ${theme.colors[color]};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: 600;
    cursor: pointer;
  `}
`

export const OutlinedButton = styled(BaseButton)`
  ${({ theme, color = 'red' }) => css`
    background-color: transparent;
    color: ${theme.colors[color]};
    outline: none;

    &:hover,
    &:active {
      background-color: ${theme.colors[color]};
      color: ${theme.colors.primary};
      outline: none;
    }
  `}
`
