import NavBar from "../NavBar";
import React, { Component } from "react";
import NumCard from "../NumCard";
import SignOutButton from "../SignOut";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import firebase from 'firebase';

class Home extends Component {
  render() {
    return (
      <FirebaseAuthProvider firebase={firebase}>
        <IfFirebaseAuthed>
        <div id="wrapper">
        <div class="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div class="container-fluid">
                <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                    <input
                      class="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Enter a Light or Light Group"
                    ></input>
                    <button class="btn btn-primary py-0" type="button">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </form>
                <div
                  class="col-5"
                  styles={{ textAlign: "center", width: "215.078px" }}
                >
                  <div id="time"></div>
                </div>
                <ul class="navbar-nav flex-nowrap ms-auto">
                  <li class="nav-item dropdown d-sm-none no-arrow">
                    <a
                      class="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <i class="fas fa-search"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form class="me-auto navbar-search w-100">
                        <div class="input-group">
                          <input
                            class="bg-light form-control border-0 small"
                            type="text"
                            placeholder="Search for ..."
                          ></input>
                          <div class="input-group-append">
                            <button class="btn btn-primary py-0" type="button">
                              <i class="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li class="nav-item dropdown no-arrow mx-1">
                    <div class="nav-item dropdown no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <span class="badge bg-danger badge-counter">3+</span>
                        <i class="fas fa-bell fa-fw"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 class="dropdown-header">alerts center</h6>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="me-3">
                            <div class="bg-primary icon-circle">
                              <i class="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span class="small text-gray-500">
                              December 12, 2019
                            </span>
                            <p>A new monthly report is ready to download!</p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="me-3">
                            <div class="bg-success icon-circle">
                              <i class="fas fa-donate text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span class="small text-gray-500">
                              December 7, 2019
                            </span>
                            <p>$290.29 has been deposited into your account!</p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="me-3">
                            <div class="bg-warning icon-circle">
                              <i class="fas fa-exclamation-triangle text-white"></i>
                            </div>
                          </div>
                          <div>
                            <span class="small text-gray-500">
                              December 2, 2019
                            </span>
                            <p>
                              Spending Alert: We've noticed unusually high
                              spending for your account.
                            </p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Show All Alerts
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown no-arrow mx-1">
                    <div class="nav-item dropdown no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <span class="badge bg-danger badge-counter">7</span>
                        <i class="fas fa-envelope fa-fw"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 class="dropdown-header">alerts center</h6>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="dropdown-list-image me-3">
                            <img
                              alt=""
                              class="rounded-circle"
                              src="assets/img/avatars/avatar4.jpeg"
                            ></img>
                            <div class="bg-success status-indicator"></div>
                          </div>
                          <div class="fw-bold">
                            <div class="text-truncate">
                              <span>
                                Hi there! I am wondering if you can help me with
                                a problem I've been having.
                              </span>
                            </div>
                            <p class="small text-gray-500 mb-0">
                              Emily Fowler - 58m
                            </p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="dropdown-list-image me-3">
                            <img
                              alt=""
                              class="rounded-circle"
                              src="assets/img/avatars/avatar2.jpeg"
                            ></img>
                            <div class="status-indicator"></div>
                          </div>
                          <div class="fw-bold">
                            <div class="text-truncate">
                              <span>
                                I have the photos that you ordered last month!
                              </span>
                            </div>
                            <p class="small text-gray-500 mb-0">
                              Jae Chun - 1d
                            </p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="dropdown-list-image me-3">
                            <img
                              alt=""
                              class="rounded-circle"
                              src="assets/img/avatars/avatar3.jpeg"
                            ></img>
                            <div class="bg-warning status-indicator"></div>
                          </div>
                          <div class="fw-bold">
                            <div class="text-truncate">
                              <span>
                                Last month's report looks great, I am very happy
                                with the progress so far, keep up the good work!
                              </span>
                            </div>
                            <p class="small text-gray-500 mb-0">
                              Morgan Alvarez - 2d
                            </p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <div class="dropdown-list-image me-3">
                            <img
                              alt=""
                              class="rounded-circle"
                              src="assets/img/avatars/avatar5.jpeg"
                            ></img>
                            <div class="bg-success status-indicator"></div>
                          </div>
                          <div class="fw-bold">
                            <div class="text-truncate">
                              <span>
                                Am I a good boy? The reason I ask is because
                                someone told me that people say this to all
                                dogs, even if they aren't good...
                              </span>
                            </div>
                            <p class="small text-gray-500 mb-0">
                              Chicken the Dog · 2w
                            </p>
                          </div>
                        </a>
                        <a
                          class="dropdown-item text-center small text-gray-500"
                          href="#"
                        >
                          Show All Alerts
                        </a>
                      </div>
                    </div>
                    <div
                      class="shadow dropdown-list dropdown-menu dropdown-menu-end"
                      aria-labelledby="alertsDropdown"
                    ></div>
                  </li>
                  <div class="d-none d-sm-block topbar-divider"></div>
                  <li class="nav-item dropdown no-arrow">
                    <div class="nav-item dropdown no-arrow">
                      <a
                        class="dropdown-toggle nav-link"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        href="#"
                      >
                        <span class="d-none d-lg-inline me-2 text-gray-600 small">
                          Valerie Luna
                        </span>
                      </a>
                      <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Profile
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Settings
                        </a>
                        <a class="dropdown-item" href="#">
                          <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                          &nbsp;Activity log
                        </a>
                        <div class="dropdown-divider"></div>
                        <SignOutButton/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
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
                                  height: "25px",
                                  width: "100.125px",
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
          </div>
          <footer class="bg-white sticky-footer">
            <div class="container my-auto">
              <div class="text-center my-auto copyright">
                <span>Copyright © Smart StreetLamp 2021</span>
              </div>
            </div>
          </footer>
        </div>
        <a class="border rounded d-inline scroll-to-top" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div>

        </IfFirebaseAuthed>
      </FirebaseAuthProvider>
    );
  }
}

export default Home;
