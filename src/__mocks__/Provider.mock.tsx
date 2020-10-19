import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

/* Redux */
import { Provider } from 'react-redux'
import { createStore } from 'redux'

/* Types */
type PropsWithChildren = React.PropsWithChildren<void>

const store = createStore(() => {
   return null
})
const history = createBrowserHistory()

const ProviderMock = ({ children }: PropsWithChildren): JSX.Element => {
   return (
      <Provider store={store}>
         <Router history={history}>{children}</Router>
      </Provider>
   )
}

export default ProviderMock
