import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* Pages */
import { Login, Signup } from '@components/pages'

/* Global Styles */
import GlobalStyles from '@src/styles/GlobalStyle'
import { Global } from '@emotion/core'
import 'semantic-ui-css/semantic.min.css'

/* Constants */
import * as routes from '@src/constants/routes'

const App = (): JSX.Element => {
   return (
      <React.Fragment>
         <Global styles={GlobalStyles} />
         <Router>
            <Switch>
               <Route exact path={routes.LOGIN} component={Login} />
               <Route exact path={routes.SIGNUP} component={Signup} />
            </Switch>
         </Router>
      </React.Fragment>
   )
}

export default App
