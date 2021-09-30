import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../SignIn';
import Home from '../Home';
import ProtectedRoute from '../ProtectedRoute';
import AddLight from '../AddLight';

import * as ROUTES from '../../constants/routes';
import Landing from '../Landing';
import Table from '../Table';
import Settings from '../Settings/Settings';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <ProtectedRoute path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <ProtectedRoute exact path={ROUTES.ADD_LIGHT} component={AddLight}/>
          <ProtectedRoute exact path={ROUTES.TABLE} component={Table}/>
          <ProtectedRoute exact path={ROUTES.SETTINGS} component={Settings}/>
        </Switch>
      </Router>
    );
  }
}

export default App;