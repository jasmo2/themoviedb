import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { breakpoints } from 'Styles'

interface HeightProps {
  height: number
}
const HeroSection = styled.section<HeightProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${(p) => (p.height === 0 ? 'auto' : `${p.height}px`)};
  padding-bottom: 250px;
  position: relative;
  width: 100%;
`

const HeroImage = styled.img`
  background-color: #80808087;
  object-fit: cover;
  width: 100%;
  height: auto;
`

const HeroWrapperImage = styled.div`
  position: absolute;
  width: 100%;
`

const HeroWrapper = styled.div`
  color: white;
  height: 100%;
  margin: 0 auto;
  max-width: 80%;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;
`

const HeroTitle = styled.h1`
  margin: 0;
  padding-top: 30px;
  font-size: 30px;

  @media (min-width: ${breakpoints.sm}px) {
    padding-top: 10%;
    font-size: 80px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 150px;
  }
`

const HeroSubTitle = styled.h2`
  font-size: 16px;

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 30px;
  }
`

const HeroDescription = styled.div<HeightProps>`
  background-color: white;
  box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.5);
  color: black;
  height: 20%;
  height: auto;
  left: 0;
  padding: 40px 20px 0;
  position: absolute;
  ${(p) => css`
    top: calc(${p.height}px - 10%);
  `};
`

const HeroGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: end;
`
const HeroGenre = styled.li`
  background-color: lightgrey;
  display: inline-block;
  margin-bottom: 6px;
  margin-right: 10px;
  padding: 10px 40px;
`

const HeroSynapsis = styled.div`
  margin-top: 30px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
`

const HeroParragraph = styled.p`
  width: 60%;
`

export const Hero = {
  ImgWrapper: HeroWrapperImage,
  Img: HeroImage,
  Genres: HeroGenres,
  Genre: HeroGenre,
  Description: HeroDescription,
  Section: HeroSection,
  SubTitle: HeroSubTitle,
  Title: HeroTitle,
  Wrapper: HeroWrapper,
  Synapsis: HeroSynapsis,
  Parragraph: HeroParragraph,
}
