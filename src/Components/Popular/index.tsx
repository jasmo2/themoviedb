/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Movie from '../MovieCards'

import { BaseUrlProps } from '../../SharedProps/BaseUrl'
import { MoviesProps } from './data'
import { RootState } from '../../Service/rootReducer'
import { getPopularMovies } from '../../Service/slices'

import { Section, MoviesWrapper, Title } from './styles'
import { Link } from 'react-router-dom'

const Movies: React.FC<MoviesProps> = (props) => {
  const { imageBaseUrl, movies } = props
  if (movies.length === 0) {
    return null
  }

  return (
    <>
      {movies.map((movie) => (
        <Link key={`popular-${movie.id}`} to={`/movie/${movie.id}`}>
          <Movie {...movie} imageBaseUrl={imageBaseUrl} />
        </Link>
      ))}
    </>
  )
}
const Popular: React.FC<BaseUrlProps> = (props) => {
  const { imageBaseUrl } = props
  const dispatch = useDispatch()
  const { popularMovies } = useSelector(
    (state: RootState) => state.popularMovies
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
