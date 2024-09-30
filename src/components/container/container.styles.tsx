import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium} ${theme.spacings.small};

    @media (min-width: ${theme.screen.medium}) {
      padding-left: 12rem;
      padding-right: 12rem;
    }

    @media (min-width: ${theme.screen.xlarge}) {
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
    }

    @media (min-width: ${theme.screen.xxlarge}) {
      padding-left: 24rem;
      padding-top: 4.5rem;
      padding-bottom: 4.5rem;
      padding-right: 36rem;

      &.container-fluid {
        padding-right: 12rem;
      }
    }
  `}
`
