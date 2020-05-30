import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Movie from 'Components/MovieCards'

import { BaseUrlProps } from 'SharedProps/BaseUrl'
import { MoviesProps } from './data'
import { RootState } from 'Services/rootReducer'
import { getPopularMovies } from 'Services/slices'

import { Section, MoviesWrapper, Title } from './styles'
import { Link } from 'react-router-dom'

const Movies: React.FC<MoviesProps> = (props) => {
  const { imageBaseUrl, movies } = props
  if (movies.length === 0) {
    return null
  }

  return (
    <>
      {movies.map((movie, idx) => (
        <Link key={movie.poster_path} to={`/movie/${movie.id}`}>
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
