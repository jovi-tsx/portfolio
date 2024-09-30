import styled, { css } from 'styled-components'
import { TextProps } from './text.component'

export const Text = styled.p<TextProps>`
  ${({ theme, color = 'lightGray', size = 'medium' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
  `}
`
