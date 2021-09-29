import React, { Component } from "react";
import { FirebaseContext } from "../Firebase";
import { SignUpForm } from "../SignUp";

class Settings extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">

                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">👨‍💻 Change Admin User</h4>
                      </div>
                      <FirebaseContext.Consumer>
                        {(firebase) => <SignUpForm firebase={firebase} />}
                      </FirebaseContext.Consumer>

                    </div>
                  </div>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="card-body p-0">

                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">
                          📌 Change Weather Location
                        </h4>
                      </div>
                      <form className="user">
                        <div className="row mb-3">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" placeholder="Latitude"/>
                            
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" placeholder="Longitude"/>
                            
                          </div>
                        </div>
                       
                        <button
          className="btn btn-primary d-block btn-user w-100"
          type="submit"
        >
          Submit
        </button>
                      </form>

                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
