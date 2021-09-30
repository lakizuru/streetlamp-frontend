import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { database } from "../Firebase/firebase";

const INITIAL_STATE = {
  email: "",
  displayName: "",
  password1: "",
  password2: "",
  error: null,
};

class SignUpForm extends Component {
    constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = (event) => {
      const { email, password1, displayName } = this.state;

      firebase.auth().currentUser.delete().then(() => {
        console.log("User Delete Successful")
      }).catch((error) => {
        console.log("User Delete Failed")
      })
  
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password1)
        .then((authUser) => {
          alert("New admin user has been registered successfully!");
        })
        .catch((error) => {
          this.setState({ error });
        });
      event.preventDefault();

      database.ref("/").update({
        UserName: displayName,
      });
    };
  
    onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const { email, displayName, password1, password2, error } = this.state;
  
      const isInvalid =
        password1 !== password2 ||
        password1 === "" ||
        email === "" ||
        password1.length < 8 ||
        displayName === "";
  
      return (
        <form  onSubmit={this.onSubmit}>
          <div className="row mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input
                className="form-control form-control-user"
                type="text"
                id="DisplayName"
                placeholder="Display Name"
                name="displayName"
                value={displayName}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              className="form-control form-control-user"
              type="email"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="row mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input
                className="form-control form-control-user"
                type="password"
                id="examplePasswordInput"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={this.onChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control form-control-user"
                type="password"
                id="exampleRepeatPasswordInput"
                placeholder="Repeat Password"
                name="password2"
                value={password2}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div style={{marginLeft: '8rem', marginRight: '10rem'}}>
          <button
            className="btn btn-primary d-block btn-user w-100"
            type="submit"
            disabled={isInvalid}
          >
            Submit
          </button>  
          </div>
          {error && <p style={{ color: "red" }}> {error.message}</p>}
        </form>
      );
    }
  }
  
  export default SignUpForm;