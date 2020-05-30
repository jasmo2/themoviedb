import styled from '@emotion/styled'

import { breakpoints } from 'Styles'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  width: 100%;

  @media (min-width: ${breakpoints.lg}px) {
    height: 500px;
  }
`
