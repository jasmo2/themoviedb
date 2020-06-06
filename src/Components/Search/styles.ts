import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { breakpoints } from '../../Styles'

const Colors = css`
  --inputGray: #f3f3f3;
`
const height = {
  xs: 30,
  sm: 40,
}
const border = 2

const InputWrapper = styled.div`
  ${Colors}
  background-color: white;
  border-radius: ${height.xs}px;
  border: solid ${border}px var(--inputGray);
  box-sizing: border-box;
  display: flex;
  height: ${height.xs}px;
  padding: 0 ${height.xs / 2}px;
  width: 100%;

  &:active,
  &:focus {
    outline: greenyellow;
  }

  @media (min-width: ${breakpoints.sm}px) {
    border-radius: ${height.sm}px;
    height: ${height.sm}px;
    padding: 0 ${height.sm / 2}px;
  }
`

const InputSearch = styled.input`
  border: 0;
  width: calc(100% - ${height.xs}px - ${2 * border}px);
  margin-right: 0;
  border-right: solid ${border}px var(--inputGray);

  &:active,
  &:focus {
    outline: none;
  }

  @media (min-width: ${breakpoints.sm}px) {
    width: calc(100% - ${height.sm}px - ${2 * border}px);
  }
`

const InputButton = styled.button`
  background: none;
  border: none;
  padding: 5px;
  width: ${height.xs}px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.sm}px) {
    width: ${height.sm}px;
  }
`

const InputMagnifyingGlass = styled.img`
  width: ${height.xs / 2}px;
  height: ${height.xs / 2}px;

  @media (min-width: ${breakpoints.sm}px) {
    width: ${height.sm / 2}px;
    height: ${height.sm / 2}px;
  }
`
export const Input = {
  Button: InputButton,
  MagnifyingGlass: InputMagnifyingGlass,
  Search: InputSearch,
  Wrapper: InputWrapper,
}

export const Container = styled.aside`
  width: 100%;
  height: auto;
  position: relative;
`
