import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isUndefined from 'lodash/isUndefined'
import isNul from 'lodash/isNull'

import { RootState } from 'Services/rootReducer'
import { useWindowEvents } from 'Providers/Resizing'
import { getMovieDetails } from 'Services/slices'

import { Hero } from './styles'

//ENHACEMENT Implement Provider that listent the Resize
// to adpat the <Hero.Description /> always in the
// same position

const MovieDetails: React.FC<any> = (props) => {
  const { imageBaseUrl, movieId } = props
  const imgWrapperRef = useRef<HTMLDivElement>(null)
  const [offsetHeight, setOffsetHeight] = useState(0)
  const { resizing } = useWindowEvents()
  const dispatch = useDispatch()
  const { movieDetails } = useSelector((state: RootState) => state.movieDetails)

  const getImageOffsetHeight = () => {
    const offsetHeight = imgWrapperRef.current?.offsetHeight || 0
    setOffsetHeight(offsetHeight)
  }

  const handleLoaded = () => {
    getImageOffsetHeight()
  }

  useEffect(() => {
    dispatch(getMovieDetails(movieId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getImageOffsetHeight()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resizing])

  if (isUndefined(movieDetails)) {
    return <h1>404</h1>
  }

  if (isNul(movieDetails)) {
    return null
  }

  return (
    <>
      <Hero.Section height={offsetHeight}>
        <Hero.ImgWrapper ref={imgWrapperRef}>
          <Hero.Img
            src={`${imageBaseUrl}/original/${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            onLoad={handleLoaded}
          />
        </Hero.ImgWrapper>
        <Hero.Wrapper>
          <Hero.Title>{movieDetails.original_title}</Hero.Title>
          <Hero.SubTitle>{movieDetails.tagline}</Hero.SubTitle>
          <Hero.Description height={offsetHeight}>
            <Hero.Genres>
              {movieDetails.genres.map((genre) => (
                <Hero.Genre key={genre.id}>{genre.name}</Hero.Genre>
              ))}
            </Hero.Genres>
            <Hero.Synapsis>
              <Hero.Parragraph>{movieDetails.overview}</Hero.Parragraph>
            </Hero.Synapsis>
          </Hero.Description>
        </Hero.Wrapper>
      </Hero.Section>
    </>
  )
}

export default React.memo(MovieDetails)
