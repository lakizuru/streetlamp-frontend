import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer class="footer-section">
        <div class=" my-auto">
          <div class="text-center my-auto copyright">
            <span style={{ color: "white" }}>
              Copyright © Smart StreetLamp 2021
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
