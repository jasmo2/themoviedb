import React from 'react'

import Header from 'Components/Header'

import { Container } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export default App
