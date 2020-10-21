import React from 'react'
import { render } from 'react-dom'
import App from '@src/App'

/* Redux */
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(() => null, composeEnhancers())

render(
   <Provider store={store}>
      <App />
   </Provider>,

   document.getElementById('app')
)
