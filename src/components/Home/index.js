import React, { Component } from "react";
import { database } from "../Firebase/firebase";
import NumCard from "./NumCard";
import Map from "./Map";
import Weather from "./Weather";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLights: [],
      offLights: [],
      faults: [],

      displayName: '',

      isLoading: true,

      // global controllers
      global: null,
      globalOn: null,
      globalBrightness: null,
      globalColorTemp: null,
    };
    this.getData();
  }

  handleGlobal = (event) => {
    if (this.state.global) {
      database.ref("/").update({
        Mode: false,
      });
    } else {
      database.ref("/").update({
        Mode: true,
      });
    }
  };

  handleGlobalOn = (event) => {
    if (this.state.globalOn) {
      database.ref("/Global").update({
        Status: false,
      });
    } else {
      database.ref("/Global").update({
        Status: true,
      });
    }
  };

  handleGlobalColorTemp() {
    database.ref("/Global").update({
      Temperature: document.getElementById("tempSlider").value,
    });
  }

  handleGlobalBrightness() {
    database.ref("/Global").update({
      Brightness: document.getElementById("brightSlider").value,
    });
  }

  getLights() {
    database.ref("/Lights/").on("value", (snapshot) => {
      let onLights = [];
      let offLights = [];
      let faults = [];
      snapshot.forEach((snap) => {
        if (snap.val().Status === "ON") {
          onLights.push(snap.val());
        }
        else if (snap.val().Status === "OFF") {
          offLights.push(snap.val());
        }
        if (snap.val().Defect === true) {
          faults.push(snap.val());
        }
      });
      this.setState({
        onLights: onLights,
        offLights: offLights,
        faults: faults,
      });
    });
  }

  getData() {
    this.getLights();
    this.getControllers();
    this.state.isLoading = false;
  }

  getControllers() {
    database.ref("/Mode").on("value", (snapshot) => {
      this.setState({
        global: snapshot.val(),
      });
    });

    database.ref("/Global/Status").on("value", (snapshot) => {
      this.setState({
        globalOn: snapshot.val(),
      });
    });

    database.ref("/Global/Brightness").on("value", (snapshot) => {
      this.setState({
        globalBrightness: snapshot.val(),
      });
    });

    database.ref("/Global/Temperature").on("value", (snapshot) => {
      this.setState({
        globalColorTemp: snapshot.val(),
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading... Please wait</span>;
    } else {
      return (
        <div class="container-fluid">
          <div class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 style={{ color: "white", fontWeight: "bold" }}>Dashboard</h3>
            <p style={{ color: "white" }}></p>
            <a
              class="btn btn-primary btn-sm d-none d-sm-inline-block"
              role="button"
              href="/add-light"
            >
              <i></i>
              &nbsp;<b style={{ fontSize: 20 }}>💡Light+</b>
            </a>
          </div>
          <div class="row">
            <NumCard
              color="blue"
              title="Connected"
              value={this.state.onLights.length + this.state.offLights.length}
            />
            <NumCard
              color="lightgreen"
              title="Active"
              value={this.state.onLights.length}
            />
            <NumCard
              color="orange"
              title="Inactive"
              value={this.state.offLights.length}
            />
            <NumCard
              color="red"
              title="Faults"
              value={this.state.faults.length}
            />
          </div>
          <div class="row">
            <div class="col-lg-8 col-xl-9">
              <div class="card shadow mb-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="text-primary fw-bold m-0">
                    Power Usage Average by Time
                  </h6>
                </div>
                <div class="card-body">
                  <div class="chart-area" style={{height: 400}}>
                    <Map/>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-xxl-3">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="text-primary fw-bold m-0">Weather</h6>
                </div>
                <div class="card-body">
                <Weather/>
                </div>
              </div>
              <hr/>
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="text-primary fw-bold m-0">Manual Override</h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={this.handleGlobal}
                      checked={this.state.global}
                    />
                    <div className="slider"></div>
                  </label>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <span>ON/OFF</span>
                    </div>
                    <div class="col">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={this.state.globalOn}
                          onChange={this.handleGlobalOn}
                        />
                        <div className="slider"></div>
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span>Brightness</span>
                    </div>
                    <div class="col">
                      <input
                        class="form-range"
                        id="brightSlider"
                        type="range"
                        value={this.state.globalBrightness}
                        min="1"
                        max="5"
                        onChange={this.handleGlobalBrightness}
                      ></input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <span>Temperature</span>
                    </div>
                    <div class="col">
                      <input
                        class="form-range"
                        id="tempSlider"
                        type="range"
                        value={this.state.globalColorTemp}
                        min="1"
                        max="5"
                        onChange={this.handleGlobalColorTemp}
                      ></input>
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
}

export default Home;
