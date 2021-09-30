import React, { Component } from "react";

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

  render() {
    const { lat, long } = this.state;

    return (
      <form>
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
              class="form-control"
              placeholder="Latitude"
              aria-label="Latitude"
              value={lat}
              aria-describedby="basic-addon1"
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
              class="form-control"
              placeholder="Longitude"
              aria-label="Longitude"
              value={long}
              aria-describedby="basic-addon1"
            />
          </div>
          </div>
        </div>
        <div style={{ marginLeft: "8rem", marginRight: "10rem" }}>
          <button
            className="btn btn-primary d-block btn-user w-100"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default WeatherConfig;
