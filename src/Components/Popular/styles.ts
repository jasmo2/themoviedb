import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { breakpoints } from '../../Styles'

type MoviesWrapperProps = {
  maxItemsPerRow: number
}

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

export const MoviesWrapper = styled.div<MoviesWrapperProps>`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: auto;

  ${({ maxItemsPerRow }) => {
    switch (maxItemsPerRow) {
      case 2:
        return css`
          margin-bottom: 30px;
          grid-template-columns: auto auto;
        `
      case 3:
        return css`
          margin-bottom: 30px;
          grid-template-columns: auto auto auto;
        `

      default:
        return css`
          grid-column-gap: 30px;
          grid-template-columns: auto;
        `
    }
  }}

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const Title = styled.h3`
  margin-bottom: 36px;
`
