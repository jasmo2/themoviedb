import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash/debounce'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'

import magnifyingGlass from 'Assets/magnifying-glass.svg'
import { RootState } from 'Services/rootReducer'
import { searchMovies, getPopularMovies, resetSearch } from 'Services/slices'

import { Input, Container } from './styles'
import Results from './Results'

const ResultsIfNeeded: React.FC<any> = (props) => {
  const { data, imageBaseUrl, onMouseDown } = props
  if (isEmpty(data)) {
    return null
  }

  return (
    <Results
      results={data}
      imageBaseUrl={imageBaseUrl}
      onMouseDown={onMouseDown}
    />
  )
}

const HomeSearch: React.FC<any> = (props) => {
  const [isPopularMovies, setIsPopularMovies] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isActive, setIsActive] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const childrenElement = useRef<boolean>(false)
  const dispatch = useDispatch()
  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  const { search } = useSelector((state: RootState) => state.search)
  const { popularMovies } = useSelector(
    (state: RootState) => state.popularMovies
  )
  let data = []
  if (isActive) {
    data = isPopularMovies ? popularMovies : search
  }

  const dispatchSearch = (value: string) => {
    if (value === '') {
      setIsPopularMovies(() => {
        dispatch(getPopularMovies())
        return true
      })
    } else {
      setIsPopularMovies(() => {
        dispatch(searchMovies(value))
        return false
      })
    }
  }

  const handleTyping = useCallback(
    debounce((e: KeyboardEvent): void => {
      const input = e.target as HTMLInputElement
      dispatchSearch(input.value)
    }, 150),
    []
  )

  const handleOnChange = (e: any) => setInputValue(e.target.value)

  const handleClick = (e: any) => {
    const search = searchRef.current!
    search.focus()
    setIsActive(() => true)
    dispatchSearch(inputValue)
  }

  const handleExit = (e: any) => {
    if (!childrenElement.current) {
      const input = searchRef.current!
      input.value = ''
      setIsActive(() => false)
      setIsPopularMovies(() => true)
      dispatch(resetSearch())
    }

    childrenElement.current = false
  }

  const handleActive = (e: any) => {
    e.stopPropagation()

    childrenElement.current = false
    setIsActive(() => true)
  }

  const handleResultsMouseDown = () => {
    setTimeout(() => {
      const input = searchRef.current!
      input && input.focus()
    }, 10)
    childrenElement.current = true
  }

  useEffect(() => {
    const input = searchRef.current!
    input.addEventListener('keydown', handleTyping)

    return () => {
      input.removeEventListener('keydown', handleTyping)
    }
  }, [handleTyping])

  return (
    <Container>
      <Input.Wrapper onFocusCapture={handleActive} onBlurCapture={handleExit}>
        <Input.Search
          ref={searchRef}
          type="text"
          onChange={handleOnChange}
          placeholder="Write the movie you would like search."
          onMouseDown={() => (childrenElement.current = true)}
        />
        <Input.Button
          onClick={handleClick}
          onMouseDown={() => (childrenElement.current = true)}
        >
          <Input.MagnifyingGlass src={magnifyingGlass} alt="logo" />
        </Input.Button>
      </Input.Wrapper>
      <ResultsIfNeeded
        data={data}
        imageBaseUrl={imageBaseUrl}
        onMouseDown={handleResultsMouseDown}
      />
    </Container>
  )
}

export default React.memo(HomeSearch)
