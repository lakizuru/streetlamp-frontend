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
    let del = window.confirm("🗑 Delete " + light + "?");

    if (del) {
      database.ref("/Lights/" + light).remove();
    }
  }

  setWarning(light, type) {
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
              <div className="row"></div>
              <table className="table my-0" id="dataTable">
                <thead>
                  <tr>
                    <th style={{ width: "15%" }}>Light</th>
                    <th style={{ width: "20%" }}>Location</th>
                    <th style={{ width: "15%" }}>Trigger Type</th>
                    <th style={{ width: "15%" }}>Status</th>
                    <th style={{ width: "15%" }}>Defects</th>
                    <th style={{ width: "20%" }}>Warnings</th>
                    <th style={{ width: "10%" }}></th>
                  </tr>
                </thead>
              </table>
              <div
                style={{ overflowY: "scroll", height: "400px" }}
                className="table-responsive table mt-2"
                id="dataTable"
                role="grid"
                aria-describedby="dataTable_info"
              >
                <table className="table my-0" id="dataTable">
                  <tbody>
                    {this.state.lights &&
                      this.state.lights.map((light) => (
                        <tr key={light.SerialNo}>
                          <td style={{ width: "15%" }}>
                            <div>{light.SerialNo}</div>
                          </td>
                          <td style={{ width: "20%" }}>{light.Location}</td>
                          {light.LDR === 1 && (
                            <td style={{ width: "15%" }}>Vehicle 🚗</td>
                          )}
                          {light.PIR === 1 && (
                            <td style={{ width: "15%" }}>Human 🚶‍♂️</td>
                          )}
                          {light.Status === "ON" && (
                            <td style={{ width: "15%" }}>
                              <b style={{ color: "green" }}>ON</b>
                            </td>
                          )}
                          {light.Status === "OFF" && (
                            <td style={{ width: "15%" }}>
                              <b style={{ color: "red" }}>OFF</b>
                            </td>
                          )}
                          {light.Defect === false && (
                            <td style={{ width: "15%" }}>
                              <b style={{ color: "green" }}>NONE</b>
                            </td>
                          )}
                          {light.Defect === true && (
                            <td style={{ width: "15%" }}>
                              <b style={{ color: "red" }}>DEFECTIVE</b>
                            </td>
                          )}
                          <td style={{ width: "20%" }}>
                            <ul className="pagination">
                              <li
                                className={
                                  (light.Warning === 0 && "page-item active") ||
                                  (light.Warning !== 0 && "page-item")
                                }
                                onClick={() =>
                                  this.setWarning(light.SerialNo, 0)
                                }
                              >
                                <a className="page-link">OFF</a>
                              </li>
                              <li
                                className={
                                  (light.Warning === 1 && "page-item active") ||
                                  (light.Warning !== 1 && "page-item")
                                }
                                onClick={() =>
                                  this.setWarning(light.SerialNo, 1)
                                }
                              >
                                <a className="page-link">LOW</a>
                              </li>
                              <li
                                className={
                                  (light.Warning === 2 && "page-item active") ||
                                  (light.Warning !== 2 && "page-item")
                                }
                                onClick={() =>
                                  this.setWarning(light.SerialNo, 2)
                                }
                              >
                                <a className="page-link">HIGH</a>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <div
                              style={{ width: "10%" }}
                              onClick={() => this.deleteLight(light.SerialNo)}
                            >
                              <span style={{ fontSize: 25 }}>🗑</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
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
