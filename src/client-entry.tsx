import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './web/App'
import { Provider } from 'react-redux'
import configurStore from './web/store'
import { StateType } from './web/store/data'
declare module window {
  var INITIAL_STORE: StateType
}
const store = configurStore(window.INITIAL_STORE)
hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App message="Hello world" />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
