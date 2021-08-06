import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import * as ROUTES from './../../constants/routes';

class Landing extends Component {
    render(){
        return(
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        );
    }
}

export default Landing;