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
              <li class="nav-item dropdown no-arrow mx-1">
                <div class="nav-item dropdown no-arrow">
                  <a
                    class="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <span class="badge bg-danger badge-counter">
                      3+
                    </span>
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
                        <p>
                          A new monthly report is ready to download!
                        </p>
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
                        <p>
                          $290.29 has been deposited into your
                          account!
                        </p>
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
                    <span class="badge bg-danger badge-counter">
                      7
                    </span>
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
                            Hi there! I am wondering if you can help
                            me with a problem I've been having.
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
                            I have the photos that you ordered last
                            month!
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
                            Last month's report looks great, I am very
                            happy with the progress so far, keep up
                            the good work!
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
                            Am I a good boy? The reason I ask is
                            because someone told me that people say
                            this to all dogs, even if they aren't
                            good...
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