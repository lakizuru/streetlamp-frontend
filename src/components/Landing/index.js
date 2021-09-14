import React from 'react';
import { Redirect } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import * as ROUTES from './../../constants/routes';

class Landing extends Component {
    render(){
        let isAuthenticated = localStorage.getItem("token") !== null ? true : false;
        
        return isAuthenticated? (
            <Redirect to={ROUTES.HOME}/>
        ) : 
        (
            <Redirect to={ROUTES.SIGN_IN}/>
        )
        ;
    }
}

export default Landing;