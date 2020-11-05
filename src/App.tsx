import React from 'react'
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch
} from 'react-router-dom'

/* Pages */
import { Login, Signup, Home } from '@components/pages'

/* Styles */
import GlobalStyles from '@src/styles/GlobalStyle'
import { Global } from '@emotion/core'
import 'semantic-ui-css/semantic.min.css'

/* Constants */
import { routes } from '@src/constants'

/* Redux */
import { useSelector } from 'react-redux'

/* Types */
import { State } from './interfaces'

const App = (): JSX.Element => {
   /* States */
   const { loggedIn } = useSelector((state: State) => state.auth.data)

   /* Methods */
   const handleStorage = () => {
      window.location.reload()
   }

   /* Life Circle */
   React.useEffect(() => {
      window.addEventListener('storage', handleStorage)
      return () => {
         window.removeEventListener('storage', handleStorage)
      }
   }, [])

   return (
      <React.Fragment>
         <Global styles={GlobalStyles} />
         <Router>
            <Switch>
               <Route exact path={routes.HOME}>
                  {loggedIn ? <Home /> : <Redirect to={routes.LOGIN} />}
               </Route>
               <Route exact path={routes.LOGIN}>
                  {!loggedIn ? <Login /> : <Redirect to={routes.HOME} />}
               </Route>
               <Route exact path={routes.SIGNUP}>
                  {!loggedIn ? <Signup /> : <Redirect to={routes.HOME} />}
               </Route>
            </Switch>
         </Router>
      </React.Fragment>
   )
}

export default App
