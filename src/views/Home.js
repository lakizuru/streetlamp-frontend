import NavBar from "../NavBar";
import React, { Component } from "react";
import NumCard from "..NumCard";

class Home extends Component {
  render() {
    return (
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3>
                <a
                  className="btn btn-primary btn-sm d-none d-sm-inline-block"
                  role="button"
                  href="#top"
                >
                  <i className="fas fa-download fa-sm text-white-50" />
                  &nbsp;Generate Report
                </a>
              </div>
              <div className="row">
                <NumCard
                  type="text-uppercase text-primary fw-bold text-xs mb-1"
                  title="total"
                  value="100"
                />
                <NumCard
                  type="text-uppercase text-info fw-bold text-xs mb-1"
                  title="connected"
                  value="70"
                />
                <NumCard
                  type="text-uppercase text-success fw-bold text-xs mb-1"
                  title="active"
                  value="25"
                />
                <NumCard
                  type="text-uppercase text-warning fw-bold text-xs mb-1"
                  title="defective"
                  value="50"
                />
              </div>

              <div className="row">
                <div className="col-lg-7 col-xl-9">
                  <div className="card shadow mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="text-primary fw-bold m-0">
                        Power Usage (last 24 hours)
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        <canvas data-bss-chart='{"type":"line","data":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],"datasets":[{"label":"Earnings","fill":true,"data":["0","10000","5000","15000","10000","20000","15000","25000"],"backgroundColor":"rgba(78, 115, 223, 0.05)","borderColor":"rgba(78, 115, 223, 1)"}]},"options":{"maintainAspectRatio":false,"legend":{"display":false,"labels":{"fontStyle":"normal"}},"title":{"fontStyle":"normal"},"scales":{"xAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"],"drawOnChartArea":false},"ticks":{"fontColor":"#858796","padding":20}}],"yAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"]},"ticks":{"fontColor":"#858796","padding":20}}]}}}' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="text-primary fw-bold m-0">
                        Global Controllers
                      </h6>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <span>ON/OFF</span>
                        </div>
                        <div className="col-xl-5">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Brightness</span>
                        </div>
                        <div className="col">
                          <input className="form-range" type="range" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Temperature</span>
                        </div>
                        <div className="col">
                          <input className="form-range" type="range" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span>Schedule ON/OFF</span>
                        </div>
                        <div className="col">
                          <div className="row">
                            <div
                              className="col"
                              style={{ padding: "2px", margin: "0px" }}
                            >
                              <input
                                type="text"
                                className="datetimepicker form-control"
                                style={{
                                  height: "25px",
                                  padding: "5px 12px",
                                  width: "100.125px",
                                }}
                                placeholder="ON Time"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col" style={{ padding: "2px" }}>
                              <input
                                type="text"
                                className="datetimepicker form-control"
                                style={{
                                  height: "25px",
                                  width: "100.125px",
                                  padding: "5px 12px",
                                }}
                                placeholder="OFF Time"
                              />
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

export default Home;
