import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'

import Initial from 'Pages/Home'
import Movie from 'Pages/Movie'

import { getConfig } from 'Services/slices'
import { Container } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = (props) => {
  const dispatch = useCallback(useDispatch(), [])

  useEffect(() => {
    dispatch(getConfig())
  }, [dispatch])

  return (
    <Container className="mainwrapper">
      <BrowserRouter>
        <Route exact={true} path="/" component={Initial} />
        <Route
          path="/movie/:id"
          render={(props) => <Movie {...props} key={props.match.params.id} />}
        />
        {/* <Route component={NotFound} /> */}
      </BrowserRouter>
    </Container>
  )
}

export default React.memo(App)
