import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'

import Initial from 'Pages/Initial'
import Movie from 'Pages/Movie'

import { getConfig } from 'Services/slices'

interface AppProps {}
const App: React.FC<AppProps> = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConfig())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Route exact={true} path="/" component={Initial} />
      <Route
        path="/movie/:id"
        render={(props) => <Movie {...props} key={props.match.params.id} />}
      />
      {/* <Route component={NotFound} /> */}
    </BrowserRouter>
  )
}

export default React.memo(App)
