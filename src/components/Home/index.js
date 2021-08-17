import React, { Component } from "react";
import {database} from "../Firebase/firebase";
import NumCard from "../NumCard";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      lights: [],
      isLoading: true
    }

    this.getData();
  }

  getLights() {
    database.ref('/Lights/').on('value', (snapshot)=> {
      let allLights = [];
      snapshot.forEach(snap => {
        allLights.push(snap.val());
      });
      this.setState({
        lights: allLights
      })
    });
  }

  getData(){
    this.getLights();
    this.state.isLoading = false;
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
                <h3 style={{color: 'white', fontWeight: 'bold'}}>Dashboard</h3>
                <p style={{color: 'white'}}>
                </p>
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
              <NumCard type="text-uppercase text-primary fw-bold text-xs mb-1" title="Total" value={this.state.lights.length}/>
              <NumCard type="text-uppercase text-info fw-bold text-xs mb-1" title="Connected" value={this.state.lights.length}/>
              <NumCard type="text-uppercase text-success fw-bold text-xs mb-1" title="Active" value={this.state.lights.length}/>
              <NumCard type="text-uppercase text-warning fw-bold text-xs mb-1" title="Faulty" value={this.state.lights.length}/>
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
                        <canvas data-bss-chart='{"type":"line","data":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],"datasets":[{"label":"Earnings","fill":true,"data":["0","10000","5000","15000","10000","20000","15000","25000"],"backgroundColor":"rgba(78, 115, 223, 0.05)","borderColor":"rgba(78, 115, 223, 1)"}]},"options":{"maintainAspectRatio":false,"legend":{"display":false,"labels":{"fontStyle":"normal"}},"title":{"fontStyle":"normal"},"scales":{"xAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"],"drawOnChartArea":false},"ticks":{"fontColor":"#858796","padding":20}}],"yAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"]},"ticks":{"fontColor":"#858796","padding":20}}]}}}'></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-xl-3 col-xxl-3">
                  <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h6 class="text-primary fw-bold m-0">
                        Global Controllers
                      </h6>
                      <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                      </label>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span>ON/OFF</span>
                        </div>
                        <div class="col">
                          <label class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
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
