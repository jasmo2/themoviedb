import styled from '@emotion/styled'

import { breakpoints } from 'Styles'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
  padding: 0 18px;

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 8%;
  }
`

export const MoviesWrapper = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-columns: auto;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: auto auto auto;
  }
`

export const Title = styled.h3`
  margin-bottom: 36px;
`
