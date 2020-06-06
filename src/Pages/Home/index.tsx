import React from 'react'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import { RootState } from '../../Service/rootReducer'

import Header from '../../Components/HomeHeader'
import Popular from '../../Components/Popular'

import { Container } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  return (
    <Container>
      <Header />
      <Popular imageBaseUrl={imageBaseUrl} />
    </Container>
  )
}

export default App
