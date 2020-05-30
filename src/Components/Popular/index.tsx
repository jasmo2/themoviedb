import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Movie from 'Components/MovieCards'

import { BaseUrlProps } from 'SharedProps/BaseUrl'
import { MoviesProps } from './data'
import { RootState } from 'Services/rootReducer'
import { getPopularMovies } from 'Services/slices'

import { Section, MoviesWrapper, Title } from './styles'

const Movies: React.FC<MoviesProps> = (props) => {
  const { imageBaseUrl, movies } = props
  if (movies.length === 0) {
    return null
  }

  return (
    <>
      {movies.map((movie, idx) => (
        <Movie key={movie.poster_path} {...movie} imageBaseUrl={imageBaseUrl} />
      ))}
    </>
  )
}
const Popular: React.FC<BaseUrlProps> = (props) => {
  const { imageBaseUrl } = props
  const dispatch = useDispatch()
  const { popularMovies } = useSelector(
    (state: RootState) => state.popularMovieSlice
  )

  useEffect(() => {
    dispatch(getPopularMovies())
  }, [])
  return (
    <Section>
      <Title>Popular Movies</Title>
      <MoviesWrapper>
        <Movies imageBaseUrl={imageBaseUrl} movies={popularMovies} />
      </MoviesWrapper>
    </Section>
  )
}

export default React.memo(Popular)
