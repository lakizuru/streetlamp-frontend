import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
              <IfFirebaseUnAuthed>
                <SignIn></SignIn>
              </IfFirebaseUnAuthed>

            </FirebaseAuthProvider>

        <Switch>
        <Route path={ROUTES.HOME}>
          <Home/>
        </Route>
        <Router path={ROUTES.SIGN_IN}>
          <SignIn></SignIn>
        </Router>
        </Switch>
      </Router>
    );
  }
}

export default App;