import React from 'react'
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch
} from 'react-router-dom'

/* Pages */
import { Login, Signup, Home } from '@components/pages'

/* Global Styles */
import GlobalStyles from '@src/styles/GlobalStyle'
import { Global } from '@emotion/core'
import 'semantic-ui-css/semantic.min.css'

/* Constants */
import { routes } from '@src/constants'

/* Hooks */
import useAuth from './hooks/useAuth'

const App = (): JSX.Element => {
   const token = useAuth()

   return (
      <React.Fragment>
         <Global styles={GlobalStyles} />
         <Router>
            <Switch>
               <Route exact path={routes.HOME}>
                  {token ? <Home /> : <Redirect to={routes.LOGIN} />}
               </Route>
               <Route exact path={routes.LOGIN}>
                  {!token ? <Login /> : <Redirect to={routes.HOME} />}
               </Route>
               <Route exact path={routes.SIGNUP}>
                  {!token ? <Signup /> : <Redirect to={routes.HOME} />}
               </Route>
            </Switch>
         </Router>
      </React.Fragment>
   )
}

export default App
