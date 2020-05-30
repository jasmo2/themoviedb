import React from 'react'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import { useRouteMatch } from 'react-router-dom'

import MovieDetails from 'Components/MovieDetails'

import { RootState } from 'Services/rootReducer'

import { Container } from './styles'

interface MoviePageProps {}
const MoviePage: React.FC<MoviePageProps> = () => {
  const match = useRouteMatch('/movie/:id') as any

  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  const movieId = get(match, 'params.id', null)
  if (isNil(movieId)) {
    return null
  }

  return (
    <Container>
      <MovieDetails movieId={movieId} imageBaseUrl={imageBaseUrl} />
    </Container>
  )
}

export default MoviePage
