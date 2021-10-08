import React from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import NavBar from '../NavBar';
import Footer from '../Footer';

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        let isAuthenticated = localStorage.getItem("token") !== null ? true : false;
       
        return isAuthenticated ? (
            <div style={{backgroundColor: '#4e73df'}}>
            <NavBar/>
            <Component />
            <div style={{bottom: '0px', position: 'absolute', width: '100%', height: '0px'}}>
      <Footer/>
      </div>
            </div>
        ) : (
            <Redirect to={ROUTES.SIGN_IN} />
        );
    }
}

export default ProtectedRoute;