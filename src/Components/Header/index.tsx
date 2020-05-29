import React from 'react'
import logo from 'logo.svg'

import { Header } from './styles'

interface AppProps {}
const HeaderComponent: React.FC<AppProps> = () => {
  return (
    <Header>
      <img src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </Header>
  )
}

export default HeaderComponent
