function LightsTable() {
  return (
    <div id="wrapper">
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
              <button
                className="btn btn-link d-md-none rounded-circle me-3"
                id="sidebarToggleTop"
                type="button"
              >
                <i className="fas fa-bars" />
              </button>
              <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                  <input
                    className="bg-light form-control border-0 small"
                    type="text"
                    placeholder="Enter a Light or Light Group"
                  />
                  <button className="btn btn-primary py-0" type="button">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
              <div id="time" />
              <ul className="navbar-nav flex-nowrap ms-auto">
                <li className="nav-item dropdown d-sm-none no-arrow">
                  <a
                    className="dropdown-toggle nav-link"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="#"
                  >
                    <i className="fas fa-search" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="me-auto navbar-search w-100">
                      <div className="input-group">
                        <input
                          className="bg-light form-control border-0 small"
                          type="text"
                          placeholder="Search for ..."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary py-0"
                            type="button"
                          >
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <div className="nav-item dropdown no-arrow">
                    <a
                      className="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <span className="badge bg-danger badge-counter">3+</span>
                      <i className="fas fa-bell fa-fw" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                      <h6 className="dropdown-header">alerts center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="me-3">
                          <div className="bg-primary icon-circle">
                            <i className="fas fa-file-alt text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="small text-gray-500">
                            December 12, 2019
                          </span>
                          <p>A new monthly report is ready to download!</p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="me-3">
                          <div className="bg-success icon-circle">
                            <i className="fas fa-donate text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="small text-gray-500">
                            December 7, 2019
                          </span>
                          <p>$290.29 has been deposited into your account!</p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="me-3">
                          <div className="bg-warning icon-circle">
                            <i className="fas fa-exclamation-triangle text-white" />
                          </div>
                        </div>
                        <div>
                          <span className="small text-gray-500">
                            December 2, 2019
                          </span>
                          <p>
                            Spending Alert: We've noticed unusually high
                            spending for your account.
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                  <div className="nav-item dropdown no-arrow">
                    <a
                      className="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <span className="badge bg-danger badge-counter">7</span>
                      <i className="fas fa-envelope fa-fw" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                      <h6 className="dropdown-header">alerts center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image me-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatars/avatar4.jpeg"
                          />
                          <div className="bg-success status-indicator" />
                        </div>
                        <div className="fw-bold">
                          <div className="text-truncate">
                            <span>
                              Hi there! I am wondering if you can help me with a
                              problem I've been having.
                            </span>
                          </div>
                          <p className="small text-gray-500 mb-0">
                            Emily Fowler - 58m
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image me-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatars/avatar2.jpeg"
                          />
                          <div className="status-indicator" />
                        </div>
                        <div className="fw-bold">
                          <div className="text-truncate">
                            <span>
                              I have the photos that you ordered last month!
                            </span>
                          </div>
                          <p className="small text-gray-500 mb-0">
                            Jae Chun - 1d
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image me-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatars/avatar3.jpeg"
                          />
                          <div className="bg-warning status-indicator" />
                        </div>
                        <div className="fw-bold">
                          <div className="text-truncate">
                            <span>
                              Last month's report looks great, I am very happy
                              with the progress so far, keep up the good work!
                            </span>
                          </div>
                          <p className="small text-gray-500 mb-0">
                            Morgan Alvarez - 2d
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image me-3">
                          <img
                            className="rounded-circle"
                            src="assets/img/avatars/avatar5.jpeg"
                          />
                          <div className="bg-success status-indicator" />
                        </div>
                        <div className="fw-bold">
                          <div className="text-truncate">
                            <span>
                              Am I a good boy? The reason I ask is because
                              someone told me that people say this to all dogs,
                              even if they aren't good...
                            </span>
                          </div>
                          <p className="small text-gray-500 mb-0">
                            Chicken the Dog · 2w
                          </p>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </div>
                  <div
                    className="shadow dropdown-list dropdown-menu dropdown-menu-end"
                    aria-labelledby="alertsDropdown"
                  />
                </li>
                <div className="d-none d-sm-block topbar-divider" />
                <li className="nav-item dropdown no-arrow">
                  <div className="nav-item dropdown no-arrow">
                    <a
                      className="dropdown-toggle nav-link"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      href="#"
                    >
                      <span className="d-none d-lg-inline me-2 text-gray-600 small">
                        Valerie Luna
                      </span>
                    </a>
                    <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />
                        &nbsp;Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />
                        &nbsp;Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />
                        &nbsp;Activity log
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />
                        &nbsp;Logout
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <h3 className="text-dark mb-4">StreetLamps</h3>
            <div className="card shadow">
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">StreetLamp Info</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 text-nowrap">
                    <div
                      id="dataTable_length"
                      className="dataTables_length"
                      aria-controls="dataTable"
                    >
                      <label className="form-label">
                        Show&nbsp;
                        <select className="d-inline-block form-select form-select-sm">
                          <option value={10} selected>
                            10
                          </option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                        &nbsp;
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="text-md-end dataTables_filter"
                      id="dataTable_filter"
                    >
                      <label className="form-label">
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          aria-controls="dataTable"
                          placeholder="Search"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className="table-responsive table mt-2"
                  id="dataTable"
                  role="grid"
                  aria-describedby="dataTable_info"
                >
                  <table className="table my-0" id="dataTable">
                    <thead>
                      <tr>
                        <th>Light</th>
                        <th>Location</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar1.jpeg"
                          />
                          Airi Satou
                        </td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar2.jpeg"
                          />
                          Angelica Ramos
                        </td>
                        <td>Chief Executive Officer(CEO)</td>
                        <td>London</td>
                        <td>47</td>
                        <td>
                          2009/10/09
                          <br />
                        </td>
                        <td>$1,200,000</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar3.jpeg"
                          />
                          Ashton Cox
                        </td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>
                          2009/01/12
                          <br />
                        </td>
                        <td>$86,000</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar4.jpeg"
                          />
                          Bradley Greer
                        </td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>41</td>
                        <td>
                          2012/10/13
                          <br />
                        </td>
                        <td>$132,000</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar5.jpeg"
                          />
                          Brenden Wagner
                        </td>
                        <td>Software Engineer</td>
                        <td>San Francisco</td>
                        <td>28</td>
                        <td>
                          2011/06/07
                          <br />
                        </td>
                        <td>$206,850</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar1.jpeg"
                          />
                          Brielle Williamson
                        </td>
                        <td>Integration Specialist</td>
                        <td>New York</td>
                        <td>61</td>
                        <td>
                          2012/12/02
                          <br />
                        </td>
                        <td>$372,000</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar2.jpeg"
                          />
                          Bruno Nash
                          <br />
                        </td>
                        <td>Software Engineer</td>
                        <td>London</td>
                        <td>38</td>
                        <td>
                          2011/05/03
                          <br />
                        </td>
                        <td>$163,500</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar3.jpeg"
                          />
                          Caesar Vance
                        </td>
                        <td>Pre-Sales Support</td>
                        <td>New York</td>
                        <td>21</td>
                        <td>
                          2011/12/12
                          <br />
                        </td>
                        <td>$106,450</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar4.jpeg"
                          />
                          Cara Stevens
                        </td>
                        <td>Sales Assistant</td>
                        <td>New York</td>
                        <td>46</td>
                        <td>
                          2011/12/06
                          <br />
                        </td>
                        <td>$145,600</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="rounded-circle me-2"
                            width={30}
                            height={30}
                            src="assets/img/avatars/avatar5.jpeg"
                          />
                          Cedric Kelly
                        </td>
                        <td>Senior JavaScript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>
                          2012/03/29
                          <br />
                        </td>
                        <td>$433,060</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <strong>Light</strong>
                        </td>
                        <td>
                          <strong>Location</strong>
                        </td>
                        <td>
                          <strong>Office</strong>
                        </td>
                        <td>
                          <strong>Age</strong>
                        </td>
                        <td>
                          <strong>Start date</strong>
                        </td>
                        <td>
                          <strong>Status</strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <p
                      id="dataTable_info"
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 27
                    </p>
                  </div>
                  <div className="col-md-6">
                    <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright">
              <span>Copyright © Smart StreetLamp 2021</span>
            </div>
          </div>
        </footer>
      </div>
      <a
        className="border rounded d-i
  nline scroll-to-top"
        href="#page-top"
      >
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
}
