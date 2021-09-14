import React,{ Component } from "react";
import { SignOutButton } from "../SignOut";

class NavBar extends Component {
    render() {
        return(
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
                        <button
                          class="btn btn-primary py-0"
                          type="button"
                        >
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
                    <span class="d-none d-lg-inline me-2 text-gray-600 small" style={{fontWeight: 'bold'}}>
                      Menu
                    </span>
                  </a>
                  <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                    <HomeButton/>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                      &nbsp;Settings
                    </a>
                    <NewAdminButton/>
                    <div class="dropdown-divider"></div>
                    <SignOutButton />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        );
    }
}
export default NavBar;

class HomeButton extends Component {
  render() {
    return(
    <a class="dropdown-item" href="/home">
    <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
    &nbsp;Home
  </a>
  );
  }
}

class NewAdminButton extends Component {
  render() {
    return (
      <a class="dropdown-item" href="/signup">
        <i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
        &nbsp;Add New Admin
      </a>
    );
  }
}

export {HomeButton, NewAdminButton};
