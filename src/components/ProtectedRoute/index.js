import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from "firebase/app";

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        let isAuthenticated = firebase.auth().currentUser !== null ? true : false;
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/signin' }} />
        );
    }
}

export default ProtectedRoute;