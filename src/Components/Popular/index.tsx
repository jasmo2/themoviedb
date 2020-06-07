/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AutoSizer, List, WindowScroller } from 'react-virtualized'

import { breakpoints } from '../../Styles'
import Movie from '../MovieCards'

import { BaseUrlProps } from '../../SharedProps/BaseUrl'
import { MoviesProps } from './data'
import { RootState } from '../../Service/rootReducer'
import { getPopularMovies } from '../../Service/slices'

import { Section, MoviesWrapper, Title } from './styles'
import { Link } from 'react-router-dom'

const ITEM_HEIGHT = {
  sm: 480,
  lg: 550,
}

function getItemHeight(width: number) {
  if (width <= breakpoints.sm) {
    return ITEM_HEIGHT.sm
  } else {
    return ITEM_HEIGHT.lg
  }
}

function generateIndexesForRow(
  rowIndex: number,
  maxItemsPerRow: number,
  itemsAmount: number
) {
  const result = []
  const startIndex = rowIndex * maxItemsPerRow

  const lastIndex = Math.min(startIndex + maxItemsPerRow, itemsAmount)

  for (let i = startIndex; i < lastIndex; i++) {
    result.push(i)
  }

  return result
}

function getMaxItemsAmountPerRow(width: number) {
  if (width <= breakpoints.sm) {
    return 1
  } else if (width > breakpoints.sm && width <= breakpoints.lg) {
    return 2
  } else {
    return 3
  }
}

function getRowsAmount(width: number, itemsAmount: number) {
  const maxItemsPerRow = getMaxItemsAmountPerRow(width)

  return Math.ceil(itemsAmount / maxItemsPerRow)
}

const Movies: React.FC<MoviesProps> = (props) => {
  const { imageBaseUrl, movies } = props

  if (movies.length === 0) {
    return null
  }

  return (
    <AutoSizer disableHeight>
      {({ width }: { width: number }) => {
        const rowCount = getRowsAmount(width, movies.length)
        return (
          <WindowScroller>
            {({ height, scrollTop }) => (
              <List
                autoHeight
                // ref={registerChild}
                height={height}
                scrollTop={scrollTop}
                width={width}
                rowCount={rowCount}
                rowHeight={getItemHeight(width)}
                // onRowsRendered={onRowsRendered}
                rowRenderer={({ index, style, key }) => {
                  const maxItemsPerRow = getMaxItemsAmountPerRow(width)

                  const moviesPerRow = generateIndexesForRow(
                    index,
                    maxItemsPerRow,
                    movies.length
                  ).map((movieIndex) => movies[movieIndex])

                  return (
                    <MoviesWrapper
                      style={style}
                      key={key}
                      maxItemsPerRow={maxItemsPerRow}
                    >
                      {moviesPerRow.map(
                        (movie) =>
                          movie && (
                            <Link
                              key={`popular-${movie.id}`}
                              to={`/movie/${movie.id}`}
                            >
                              <Movie {...movie} imageBaseUrl={imageBaseUrl} />
                            </Link>
                          )
                      )}
                    </MoviesWrapper>
                  )
                }}
                noRowsRenderer={() => <h2>no movies found</h2>}
              />
            )}
          </WindowScroller>
        )
      }}
    </AutoSizer>
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
      <Movies imageBaseUrl={imageBaseUrl} movies={popularMovies} />
    </Section>
  )
}

export default React.memo(Popular)
