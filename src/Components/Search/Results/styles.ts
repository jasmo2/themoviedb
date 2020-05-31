import { Link as BaseLink } from 'react-router-dom'

import styled from '@emotion/styled'
// import { css } from '@emotion/core'
// import { breakpoints } from 'Styles'

export const ResultsWrapper = styled.div`
  background-color: white;
  height: auto;
  left: 50%;
  max-height: 470px;
  overflow-y: scroll;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 40px);
`

const ResultWrapper = styled.div`
  border-bottom: gray 2px solid;
  display: flex;
  height: auto;
  padding: 10px;
  width: auto;

  
  &:hover {
    background-color: lightgray;
  }
}
`

const ResultTitle = styled.h4`
  font-size: 16px;
  margin: 0;
`

const ResultSynapsis = styled.p`
  display: block;
  line-height: 1.5;
  flex-basis: 100%;
  font-size: 12px;
  overflow: hidden;
  text-decoration: dashed;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const imgWidth = 45
const imgMargin = 6
const ResultImg = styled.img`
  object-fit: none;
  width: ${imgWidth}px;
  height: auto;
  margin-right: ${imgMargin}px;
`

const ResultBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - ${imgWidth}px - ${imgMargin}px);
`

export const Result = {
  Wrapper: ResultWrapper,
  Img: ResultImg,
  Body: ResultBody,
  Title: ResultTitle,
  Synapsis: ResultSynapsis,
}

export const Link = styled(BaseLink)`
  color: black;
  text-decoration-color: #2d2d2d;
`

const RatingWrappers = styled.div`
  background: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  width: auto;
`

const RatingTitle = styled.h3`
  font-size: 24px;
  text-align: left;
  color: black;
`

export const Rating = {
  Wrapper: RatingWrappers,
  Title: RatingTitle,
}

const starSize = 25
export const Stars = styled.img`
  width: ${starSize}px;
  height: ${starSize}px;
`
