import styled from '@emotion/styled'

import { breakpoints } from 'Styles'

export const Header = styled.header`
  height: 100vh;
  width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    height: 400px;
  }
`
