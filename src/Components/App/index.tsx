import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import get from 'lodash/get'

import { getConfig } from 'Services/slices'
import { RootState } from 'Services/rootReducer'

import Header from 'Components/Header'
import Popular from 'Components/Popular'

import { Container } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch()
  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  useEffect(() => {
    dispatch(getConfig())
  }, [])

  return (
    <Container>
      <Header />
      <Popular imageBaseUrl={imageBaseUrl} />
    </Container>
  )
}

export default App
