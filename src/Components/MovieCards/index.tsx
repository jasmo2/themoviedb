import React from 'react'
import { Card, PreviewText } from './styles'
import { MovieProps } from './data'

const Movie: React.FC<MovieProps> = (props) => {
  const { imageBaseUrl, ...movie } = props

  return (
    <Card>
      <img
        src={`${imageBaseUrl}/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <PreviewText>{movie.original_title}</PreviewText>
    </Card>
  )
}

export default React.memo(Movie)
