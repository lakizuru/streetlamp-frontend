import NavBar from "../NavBar";
import React, { Component } from "react";
import NumCard from "../NumCard";
import SignOutButton from "../SignOut";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import firebase from "firebase";
import SignIn from "../SignIn";
import { Redirect, Router } from "react-router-dom";
import * as ROUTES from "./../../constants/routes";
import { NewAdminButton } from "../SignUp";
import Footer from "../Footer";

class Home extends Component {
  render() {
    return (
            <div class="container-fluid">
              <div class="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 class="text-dark mb-0">Dashboard</h3>
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
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow border-start-primary py-2">
                    <div class="card-body">
                      <div class="row align-items-center no-gutters">
                        <div class="col me-2">
                          <div class="text-uppercase text-primary fw-bold text-xs mb-1">
                            <span>Total</span>
                          </div>
                          <div class="text-dark fw-bold h5 mb-0">
                            <span>$40,000</span>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow border-start-success py-2">
                    <div class="card-body">
                      <div class="row align-items-center no-gutters">
                        <div class="col me-2">
                          <div class="text-uppercase text-success fw-bold text-xs mb-1">
                            <span>connected</span>
                          </div>
                          <div class="text-dark fw-bold h5 mb-0">
                            <span>$215,000</span>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow border-start-info py-2">
                    <div class="card-body">
                      <div class="row align-items-center no-gutters">
                        <div class="col me-2">
                          <div class="text-uppercase text-info fw-bold text-xs mb-1">
                            <span>active</span>
                          </div>
                          <div class="row g-0 align-items-center">
                            <div class="col-auto">
                              <div class="text-dark fw-bold h5 mb-0 me-3">
                                <span>50%</span>
                              </div>
                            </div>
                            <div class="col">
                              <div class="progress progress-sm">
                                <div
                                  class="progress-bar bg-info"
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  styles={{ width: "50%" }}
                                >
                                  <span class="visually-hidden">50%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow border-start-warning py-2">
                    <div class="card-body">
                      <div class="row align-items-center no-gutters">
                        <div class="col me-2">
                          <div class="text-uppercase text-warning fw-bold text-xs mb-1">
                            <span>faults</span>
                          </div>
                          <div class="text-dark fw-bold h5 mb-0">
                            <span>18</span>
                          </div>
                        </div>
                        <div class="col-auto">
                          <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Home;
