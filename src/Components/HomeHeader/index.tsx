import React from 'react'

import { Header, HomeSearchWrapper } from './styles'
import HomeSearch from 'Components/Search'

interface AppProps {}
const HeaderComponent: React.FC<AppProps> = () => {
  return (
    <Header>
      <HomeSearchWrapper>
        <HomeSearch />
      </HomeSearchWrapper>
    </Header>
  )
}

export default HeaderComponent
