import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import * as ROUTES from "../../constants/routes";
import { database } from "../Firebase/firebase";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      isLoading: true,
    };

    this.getDisplayName();
  }

  onSignOut = (event) => {
    localStorage.clear();
    firebase.auth().signOut();

    <Redirect to={ROUTES.LANDING} />;
  };

  getDisplayName = () => {
    database.ref("/UserName").once("value", (snapshot) => {
      this.setState({
        displayName: snapshot.val(),
      });
    });
    this.state.isLoading = false;
  };

  render() {
    if (this.state.isLoading) {
      return <div>Loading</div>;
    } else {
      return (
        <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
          <div class="container-fluid">
            <div
              class="col-5"
              styles={{ textAlign: "center", width: "215.078px" }}
            >
              <b>
                <div id="time"></div>
              </b>
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

              <div class="d-none d-sm-block topbar-divider"></div>
              <li class="nav-item dropdown no-arrow">
                <div class="nav-item dropdown no-arrow">
                  <a
                    class="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span
                      class="d-none d-lg-inline me-2 text-gray-600 small"
                      style={{ fontWeight: "bold" }}
                    >
                      Hi!, {this.state.displayName}
                    </span>
                  </a>
                  <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                    <a class="dropdown-item" href="/">
                      <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                      &nbsp;Home
                    </a>
                    <a class="dropdown-item" href="/settings">
                      <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                      &nbsp;Settings
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                      class="dropdown-item"
                      href="/"
                      type="button"
                      onClick={this.onSignOut}
                    >
                      <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                      &nbsp;Logout
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}
export default NavBar;
