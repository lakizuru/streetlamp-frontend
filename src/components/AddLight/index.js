import React, { Component } from "react";
import { database } from "../Firebase/firebase";

const INITIAL_STATE = {
  serialNo: '',
  location: '',
  ldr: false,
  pir: false
}

class AddLight extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
    }

  addLight(){
    const {serialNo, location, ldr, pir} = this.state;
    database.ref('/Lights/' + serialNo).set({
      Location: location,
      LDR: ldr,
      PIR: pir
    })
  }

  typePIR(){
    this.state.pir = true;
    this.state.ldr = false;
    //this.setState({pir: true, ldr: false})
  }

  typeLDR(){
    //this.setState({pir: false, ldr: true})
    this.state.pir = false;
    this.state.ldr = true;
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="card shadow-lg o-hidden border-0 my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-flex">
                <div
                  className="flex-grow-1 bg-register-image"
                  style={{
                    backgroundImage: 'url("assets/img/dogs/image2.jpeg")',
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Add Light</h4>
                  </div>
                  <form className="user">
                    <div className="row mb-3" style={{ height: "48px" }}>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          className="form-control form-control-user"
                          type="text"
                          id="Serial Number"
                          placeholder="Serial Number"
                          name="serialNo"
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="location"
                        placeholder="Location"
                        name="location"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 col-lg-4 offset-lg-1 mb-3 mb-sm-0">
                        <span>Trigger type:</span>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="formCheck-1"
                            name='trigger'
                            onClick={this.typePIR}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-1"
                          >
                            Human
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-3">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="form-check-input"
                            id="formCheck-2"
                            name='trigger'
                            onClick={this.typeLDR}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-2"
                          >
                            Car
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary d-block btn-user w-100"
                      type="button"
                      disabled={this.state.serialNo ==='' || this.state.location === '' || (this.state.pir === false && this.state.ldr === false)}
                      onClick={() => this.addLight()}
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
    );
  }
}

export default AddLight;
