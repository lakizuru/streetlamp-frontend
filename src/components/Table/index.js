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

  deleteLight(light) {
    let del = window.confirm("Delete " + light + "?");

    if (del) {
      database.ref("/Lights/" + light).remove();
    }

    return (
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    );
  }

  setWarning(light, type){
    database.ref("/Lights/" + light).update({
      Warning: type,
    });
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
                      <th>Warnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.lights &&
                      this.state.lights.map((light) => (
                        <tr key={light.SerialNo}>
                          <td>
                            <div
                              onClick={() => this.deleteLight(light.SerialNo)}
                            >
                              {light.SerialNo}
                            </div>
                          </td>
                          <td>{light.Location}</td>
                          {light.LDR === 1 && <td>Vehicle 🚗</td>}
                          {light.PIR === 1 && <td>Human 🚶‍♂️</td>}
                          {light.Status === "ON" && (
                            <td>
                              <b style={{ color: "green" }}>ON</b>
                            </td>
                          )}
                          {light.Status === "OFF" && (
                            <td>
                              <b style={{ color: "red" }}>OFF</b>
                            </td>
                          )}
                          <td>
                            <ul className="pagination">
                              <li
                                className={
                                  (light.Warning === "OFF" &&
                                    "page-item active") ||
                                  (light.Warning !== "OFF" && "page-item")
                                }
                                onClick={() => this.setWarning(light.SerialNo, "OFF")}
                              >
                                <a className="page-link" href="#">
                                  OFF
                                </a>
                              </li>
                              <li
                                className={
                                  (light.Warning === "LOW" &&
                                    "page-item active") ||
                                  (light.Warning !== "LOW" && "page-item")
                                }
                                onClick={() => this.setWarning(light.SerialNo, "LOW")}
                              >
                                <a className="page-link" href="#">
                                  LOW
                                </a>
                              </li>
                              <li
                                className={
                                  (light.Warning === "HIGH" &&
                                    "page-item active") ||
                                  (light.Warning !== "HIGH" && "page-item")
                                }
                                onClick={() => this.setWarning(light.SerialNo, "HIGH")}
                              >
                                <a className="page-link" href="#">
                                  HIGH
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Light</th>
                      <th>Location</th>
                      <th>Trigger Type</th>
                      <th>Status</th>
                      <th>Warnings</th>
                    </tr>
                  </tfoot>
                </table>
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
