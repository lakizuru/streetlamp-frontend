import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Footer from "../Footer";

class SignIn extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#4e73df'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  
                  <div className="col">
                    <div className="p-5">
                      <h1 align="center">
                        <strong>Smart StreetLamp Portal</strong>
                      </h1>
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>

                      <SignInForm/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default SignIn;

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", firebase.auth().currentUser.getIdToken());
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);

      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit} className="user">
        <div className="mb-3">
          <input
            className="form-control form-control-user"
            type="email"
            id="exampleInputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter Email Address..."
            name="email"
            value={email}
            onChange={this.onChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control form-control-user"
            type="password"
            id="exampleInputPassword"
            placeholder="Password"
            name="password"
            value={this.password}
            onChange={this.onChange}
          />
        </div>
        <button
          className="btn btn-primary d-block btn-user w-100"
          type="submit"
          disabled={isInvalid}
        >
          Login
        </button>
       
        {error && <p style={{color: 'red'}}>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter, withFirebase)(SignInFormBase);

export {SignInForm};
