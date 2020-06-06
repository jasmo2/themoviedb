import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import ResizingProvider from './Providers/Resizing'

import App from './Components/App'
import * as serviceWorker from './serviceWorker'

import store from './Service/store'

ReactDOM.render(
  <React.StrictMode>
    <ResizingProvider>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ResizingProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
