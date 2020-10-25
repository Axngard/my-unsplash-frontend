import React from 'react'
import { render } from 'react-dom'
import App from '@src/App'

/* Redux */
import { Provider } from 'react-redux'
import store from '@src/redux/store'

render(
   <Provider store={store}>
      <App />
   </Provider>,

   document.getElementById('app')
)
