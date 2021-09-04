import React, { Component } from "react";
import {database} from "../Firebase/firebase";
import NumCard from "./NumCard";
import PowerChart from "./chart";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      lights: [],
      onLights: 0,
      regLights: 0,
      faults: 0,
      
      isLoading: true,
      global
    }
    this.getData();
  }

  handleGlobal = event => {
    if(this.state.global) {
      database.ref('/').update({
        Mode: false
      });
    }
    else {
      database.ref('/').update({
        Mode: true
      });
    }
  }

  getLights() {
    database.ref('/Lights/').on('value', (snapshot)=> {
      let allLights = [];
      let onLights = 0;
      let regLights = 0;
      let faults = 0;
      snapshot.forEach(snap => {
        allLights.push(snap.val());
        if (snap.val().Status === "ON") {
          onLights++;
        }
        if (snap.val().Registration) {
          regLights++;
        }
        if (snap.val().Faulty === true) {
          faults++;
        }
      });
      this.setState({
        lights: allLights,
        onLights: onLights,
        regLights: regLights,
        faults: faults
      })
    });
  }

  getData(){
    this.getLights();
    this.getControllers();
    this.state.isLoading = false;
  }

  getControllers(){
    database.ref('/Mode').on('value', (snapshot) => {
      this.setState({
        global: snapshot.val()
      })
    })
  }

  render() {
    if (this.state.isLoading){
      return(
        <span>Loading... Please wait</span>
      );
    }
    else {
    return (
      <div class="container-fluid">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 style={{ color: "white", fontWeight: "bold" }}>Dashboard</h3>
          <p style={{ color: "white" }}></p>
          <a
            class="btn btn-primary btn-sm d-none d-sm-inline-block"
            role="button"
            href="#"
          >
            <i class="fas fa-download fa-sm text-white-50"></i>
            &nbsp;Generate Report
          </a>
        </div>
        <div class="row">
          <NumCard
            type="text-uppercase text-primary fw-bold text-xs mb-1"
            title="Total"
            value={this.state.lights.length}
          />
          <NumCard
            type="text-uppercase text-info fw-bold text-xs mb-1"
            title="Connected"
            value={this.state.regLights}
          />
          <NumCard
            type="text-uppercase text-success fw-bold text-xs mb-1"
            title="Active"
            value={this.state.onLights}
          />
          <NumCard
            type="text-uppercase text-warning fw-bold text-xs mb-1"
            title="Faulty"
            value={this.state.faults}
          />
        </div>
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="card shadow mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h6 class="text-primary fw-bold m-0">
                  Power Usage (last 24 hours)
                </h6>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  <PowerChart/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3 col-xxl-3">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h6 class="text-primary fw-bold m-0">Global Controllers</h6>
                <label className="switch">
                      <input type="checkbox" onChange={this.handleGlobal} checked={this.state.global}/>
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
                      <input type="checkbox" checked={this.state.global}/>
                      <div className="slider"></div>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <span>Brightness</span>
                  </div>
                  <div class="col">
                    <input class="form-range" type="range"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <span>Temperature</span>
                  </div>
                  <div class="col">
                    <input class="form-range" type="range"></input>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <span>Schedule ON/OFF</span>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col" styles={{ padding: "2px" }}>
                        <input
                          type="text"
                          class="datetimepicker form-control"
                          styles={{
                            height: "25px",
                            width: "100.125px",
                            placeholder: "ON Time",
                          }}
                        ></input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col" styles={{ padding: "2px" }}>
                        <input
                          type="text"
                          class="datetimepicker form-control"
                          styles={{
                            height: "20px",
                            width: "10.125px",
                            placeholder: "OFF Time",
                          }}
                        ></input>
                      </div>
                    </div>
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
