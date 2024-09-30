import styled, { css } from 'styled-components'

export const MenuIcon = styled.div`
  ${({ theme }) => css`
    &,
    &::before,
    &::after {
      background: ${theme.colors.secondary};
      content: '';
      display: block;
      height: 2px;
      position: absolute;
      transition: background ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
      width: 100%;
    }

    &::before {
      top: -10px;
    }

    &::after {
      top: 10px;
      width: 61.9578%;
      transition: width 0.5s;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: none;
    color: ${theme.colors.secondary};
    padding: 0;
    margin: 0;
    outline: none;
    border: 0;
    width: 3rem;
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;

    svg {
      width: 3rem;
      height: auto;
    }

    &:hover
      > ${MenuIcon}::after,
      &:active
      > ${MenuIcon}::after,
      &.opened
      > ${MenuIcon}::after {
      width: 100%;
    }

    &.opened > ${MenuIcon} {
      background: transparent;
    }

    &.opened > ${MenuIcon}::before, &.opened > ${MenuIcon}::after {
      top: 0;
      transition: top ease 0.3s, transform ease 0.3s 0.3s;
    }

    &.opened > ${MenuIcon}::before {
      transform: rotate(45deg);
    }

    &.opened > ${MenuIcon}::after {
      transform: rotate(-45deg);
    }
  `}
`
