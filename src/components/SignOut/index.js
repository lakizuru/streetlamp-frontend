import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withFirebase } from '../Firebase';
import firebase from "firebase/app";
import "firebase/auth";
import * as ROUTES from '../../constants/routes';
import compose from 'recompose/compose';

class SignOutButtonBase extends Component {
    constructor(props) {
        super(props)
    }
    onSignOut = event => {
        firebase.auth().signOut();
    }

    render() {
        return (
          <a
            class="dropdown-item"
            href="#"
            type="button"
            onClick={this.onSignOut}
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
            &nbsp;Logout
          </a>
        );
    }
}

export default SignOutButtonBase;

const SignOutButton = compose(
    withRouter, withFirebase)(SignOutButtonBase);

export {SignOutButton};