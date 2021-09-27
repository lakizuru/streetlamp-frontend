import React, { Component } from "react";
import { database } from "../Firebase/firebase";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lights: [],
      isLoading: true,
    };

    this.getLights();
  }

  getLights() {
    database.ref("/Lights/").on("value", (snapshot) => {
      let allLights = [];
      snapshot.forEach((snap) => {
        allLights.push(snap.val());
        console.log(allLights);
      });
      this.setState({
        lights: allLights,
      });
    });
    this.state.isLoading = false;
  }

  render() {
    if (this.state.isLoading) {
      return <span>Loading... Please wait</span>;
    } else {
      console.log(this.state.lights);
      return (
        <div className="container-fluid">
          <div className="card shadow">
            <div className="card-header py-3">
              <p className="text-primary m-0 fw-bold">Lights list</p>
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
                      <th>Trigger Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.lights &&
                      this.state.lights.map((light) => (
                        <tr key={light.SerialNo}>
                          <td>{light.SerialNo}</td>
                          <td>{light.Location}</td>
                          {light.LDR === 1 && <td>Vehicle 🚗</td>}
                          {light.PIR === 1 && <td>Human 🚶‍♂️</td>}
                          {light.Status === "ON" && <td>ON</td>}
                          {light.Status ===  "OFF" && <td>OFF</td>}
                        </tr>
                        
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Light</th>
                      <th>Location</th>
                      <th>Trigger Type</th>
                      <th>Status</th>
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
                        <a className="page-link" href="#" aria-label="Previous">
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
          <hr style={{ color: "#4e73df" }}></hr>
        </div>
      );
    }
  }
}

export default Table;
