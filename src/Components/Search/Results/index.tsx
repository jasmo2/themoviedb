import React, { useState, useEffect } from 'react'
import RatingFilter from 'react-rating'

import isUndefined from 'lodash/isUndefined'

/**
 * ENHACEMENT:
 * implement virtualize List in case the cinema wants
 * large amount data to be display.
 *
 * import { AutoSizer, List, InfiniteLoader } from 'react-virtualized'
 */

import { MovieProps } from 'Components/MovieCards/data'

import { ResultsWrapper, Result, Link, Rating } from './styles'
interface ResultsProps {
  results: MovieProps[]
  imageBaseUrl: string
  onMouseDown: () => void
}

interface ResultProps {
  movie: MovieProps
  imageBaseUrl: string
}

const ResultElement: React.FC<ResultProps> = (props) => {
  const { movie, imageBaseUrl: url } = props
  return (
    <Link to={`/movie/${movie.id}`}>
      <Result.Wrapper>
        <Result.Img src={`${url}/w45/${movie.poster_path}`} />
        <Result.Body>
          <Result.Title>{movie.original_title}</Result.Title>
          <Result.Synapsis>{movie.overview}</Result.Synapsis>
        </Result.Body>
      </Result.Wrapper>
    </Link>
  )
}

const Results: React.FC<ResultsProps> = (props) => {
  const { results, imageBaseUrl, onMouseDown } = props
  const [movies, setMovies] = useState(results)
  const [value, setValue] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (isUndefined(value)) {
      setMovies(results)
    } else {
      /**
       * NOTE: vote_average is the corresponding field on the data
       */
      const lowerLimit = value * 2 - 2
      const upperLimit = value * 2
      const filterMovies = results.filter((movie) => {
        if (
          movie.vote_average >= lowerLimit &&
          movie.vote_average <= upperLimit
        ) {
          return movie
        }
        return null
      })
      setMovies(filterMovies)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <ResultsWrapper onMouseDown={onMouseDown}>
      <Rating.Wrapper>
        <Rating.Title>Filter by Rating</Rating.Title>

        <RatingFilter
          initialRating={value}
          onClick={(number) => {
            setValue((prev) => {
              if (prev === number) {
                return undefined
              }
              return number
            })
          }}
        />
      </Rating.Wrapper>
      {movies.map((movie) => (
        <ResultElement
          key={`result-${movie.id}`}
          movie={movie}
          imageBaseUrl={imageBaseUrl}
        />
      ))}
    </ResultsWrapper>
  )
}

export default Results
