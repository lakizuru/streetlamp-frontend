function Home() {
    return(
      <div id="wrapper">
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Enter a Light or Light Group" /><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                </form><div id="time" />
                <ul className="navbar-nav flex-nowrap ms-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#top"><i className="fas fa-search" /></a>
                    <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                      <form className="me-auto navbar-search w-100">
                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                          <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#top"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="me-3">
                            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 12, 2019</span>
                            <p>A new monthly report is ready to download!</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="me-3">
                            <div className="bg-success icon-circle"><i className="fas fa-donate text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 7, 2019</span>
                            <p>$290.29 has been deposited into your account!</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="me-3">
                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 2, 2019</span>
                            <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                          </div>
                        </a><a className="dropdown-item text-center small text-gray-500" href="#top">Show All Alerts</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#top"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="dropdown-list-image me-3"><img alt="" className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" />
                            <div className="bg-success status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                            <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="dropdown-list-image me-3"><img alt="" className="rounded-circle" src="assets/img/avatars/avatar2.jpeg" />
                            <div className="status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                            <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="dropdown-list-image me-3"><img alt="" className="rounded-circle" src="assets/img/avatars/avatar3.jpeg" />
                            <div className="bg-warning status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                            <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#top">
                          <div className="dropdown-list-image me-3"><img alt="" className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" />
                            <div className="bg-success status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                            <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                          </div>
                        </a><a className="dropdown-item text-center small text-gray-500" href="#top">Show All Alerts</a>
                      </div>
                    </div>
                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                  </li>
                  <div className="d-none d-sm-block topbar-divider" />
                  <li className="nav-item dropdown no-arrow">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#top"><span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span></a>
                      <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#top"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#top"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#top"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                        <div className="dropdown-divider" /><a className="dropdown-item" href="#top"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"/>&nbsp;Logout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Dashboard</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="#top"><i className="fas fa-download fa-sm text-white-50" />&nbsp;Generate Report</a>
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-start-primary py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Total</span></div>
                          <div className="text-dark fw-bold h5 mb-0"><span>$40,000</span></div>
                        </div>
                        <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-start-success py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>connected</span></div>
                          <div className="text-dark fw-bold h5 mb-0"><span>$215,000</span></div>
                        </div>
                        <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-start-info py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>active</span></div>
                          <div className="row g-0 align-items-center">
                            <div className="col-auto">
                              <div className="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                            </div>
                            <div className="col">
                              <div className="progress progress-sm">
                                <div className="progress-bar bg-info" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}><span className="visually-hidden">50%</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300" /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow border-start-warning py-2">
                    <div className="card-body">
                      <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                          <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>faults</span></div>
                          <div className="text-dark fw-bold h5 mb-0"><span>18</span></div>
                        </div>
                        <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-xl-9">
                  <div className="card shadow mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="text-primary fw-bold m-0">Power Usage (last 24 hours)</h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;padding&quot;:20}}]}}}" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h6 className="text-primary fw-bold m-0">Global Controllers</h6><label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" />
                      </label>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col"><span>ON/OFF</span></div>
                        <div className="col-xl-5"><label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                          </label></div>
                      </div>
                      <div className="row">
                        <div className="col"><span>Brightness</span></div>
                        <div className="col"><input className="form-range" type="range" /></div>
                      </div>
                      <div className="row">
                        <div className="col"><span>Temperature</span></div>
                        <div className="col"><input className="form-range" type="range" /></div>
                      </div>
                      <div className="row">
                        <div className="col"><span>Schedule ON/OFF</span></div>
                        <div className="col">
                          <div className="row">
                            <div className="col" style={{padding: '2px', margin: '0px'}}><input type="text" className="datetimepicker form-control" style={{height: '25px', padding: '5px 12px', width: '100.125px'}} placeholder="ON Time" /></div>
                          </div>
                          <div className="row">
                            <div className="col" style={{padding: '2px'}}><input type="text" className="datetimepicker form-control" style={{height: '25px', width: '100.125px', padding: '5px 12px'}} placeholder="OFF Time" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-white sticky-footer">
            <div className="container my-auto">
              <div className="text-center my-auto copyright"><span>Copyright © Smart StreetLamp 2021</span></div>
            </div>
          </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
      </div>              
    );
  }

export default Home;