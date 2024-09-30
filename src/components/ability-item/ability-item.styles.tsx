import styled, { css } from 'styled-components'

export const Skill = styled.div`
  ${({ theme }) => css`
    text-transform: uppercase;

    @media (min-width: ${theme.screen.medium}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: right;
    }
  `}
`

export const SkillBar = styled.div`
  ${({ theme }) => css`
    > p {
      font-weight: ${theme.font.semibold};
      margin-bottom: 1.2rem;
      margin-top: ${theme.spacings.xxsmall};

      @media (min-width: ${theme.screen.medium}) {
        margin-top: 0;
      }
    }
  `}
`

export const Bars = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;

    > div {
      height: 5px;
      width: 4.8rem;
      background-color: ${theme.colors.lightGray};
      margin-right: 6px;

      &:last-child {
        margin-right: 0;
      }

      &.fill {
        background-color: ${theme.colors.red};
      }

      @media (min-width: ${theme.screen.large}) {
        width: 6.4rem;
        margin-right: 8px;
      }
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    &:not(:last-child) {
      padding-bottom: ${theme.spacings.medium};
      margin-bottom: ${theme.spacings.medium};
      border-bottom: ${theme.borders.xsmall} solid ${theme.colors.lightGray};
    }
  `}
`
