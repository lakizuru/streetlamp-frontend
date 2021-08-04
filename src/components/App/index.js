import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';
import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";

import SignIn from '../SignIn';
import Home from '../Home';
import Admin from '../Admin';
import Account from '../Account';
import PasswordForget from '../PasswordForget';
import SignUp from '../SignUp';

import * as ROUTES from '../../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
      <FirebaseAuthProvider firebase={firebase}>
              <IfFirebaseAuthed>
                <Redirect to={ROUTES.HOME}/>
              </IfFirebaseAuthed>
              <IfFirebaseUnAuthed>
                <Redirect to={ROUTES.SIGN_IN}/>
              </IfFirebaseUnAuthed>

            </FirebaseAuthProvider>

        <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn></SignIn>
        </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;