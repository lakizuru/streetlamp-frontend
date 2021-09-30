import React, { Component } from "react";
import { FirebaseContext } from "../Firebase";
import SignUpForm from "./SignUpForm";
import WeatherConfig from "./WeatherConfig";

class Settings extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="card shadow-lg o-hidden border-0 my-5">
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
          <div className="col">
            <div className="container">
              <div className="card shadow-lg o-hidden border-0 my-5">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">
                      📌 Change Weather Location
                    </h4>
                  </div>
                  <WeatherConfig />
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
