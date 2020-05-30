import styled from '@emotion/styled'

import coverImage from 'Assets/coverImage.jpg'

import { breakpoints } from 'Styles'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakpoints.lg}px) {
    height: 500px;
  }

  &::after {
    content: '';

    background-color: black;
    background-image: url(${coverImage});
    background-position: 50%;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 0.65;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`

export const HomeSearchWrapper = styled.div`
  margin: auto;
  width: 60%;

  @media (min-width: ${breakpoints.sm}px) {
    width: 250px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    width: 350px;
  }
`
