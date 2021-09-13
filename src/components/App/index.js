import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../SignIn';
import Home from '../Home';
import SignUp from '../SignUp';
import ProtectedRoute from '../ProtectedRoute';
import AddLight from '../AddLight';

import * as ROUTES from '../../constants/routes';
import Landing from '../Landing';
import Table from '../Table';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <ProtectedRoute path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
          <ProtectedRoute path={ROUTES.SIGN_UP} component={SignUp}/>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <ProtectedRoute exact path={ROUTES.ADD_LIGHT} component={AddLight}/>
          <ProtectedRoute exact path={ROUTES.TABLE} component={Table}/>
        </Switch>
      </Router>
    );
  }
}

export default App;