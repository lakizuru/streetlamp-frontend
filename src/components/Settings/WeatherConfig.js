import React, { Component } from "react";
import { database } from "../Firebase/firebase";

const INITIAL_STATE = {
  lat: 0,
  long: 0,
};

class WeatherConfig extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { lat, long } = this.state;

    database.ref("/WeatherLocation").update({
        latitude: lat,
        longitude: long
      });
  }

  render() {
    const { lat, long } = this.state;

    const isInvalid = lat === 0 && long === 0;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="row mb-3">
        <div className="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Latitude &nbsp;&nbsp;
              </span>
            </div>
            <input
              type="number"
              step=".01"
              class="form-control"
              aria-label="Latitude"
             name="lat"
              aria-describedby="basic-addon1"
              onChange={this.onChange}
              value={lat}
            />

          </div>
          </div>
          <div className="col">

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                Longitude
              </span>
            </div>
            <input
            type="number"
              step=".01"
              name="long"
              class="form-control"
              aria-label="Longitude"
            value={long}
              aria-describedby="basic-addon1"
              onChange={this.onChange}
            />
          </div>
          </div>
        </div>
        <div style={{ marginLeft: "8rem", marginRight: "10rem" }}>
          <button
            className="btn btn-primary d-block btn-user w-100"
            type="submit"
            disabled={isInvalid}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default WeatherConfig;
