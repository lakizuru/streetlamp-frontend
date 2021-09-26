import React, { Component } from "react";
import { Link } from "react-router-dom";
import { database } from "../Firebase/firebase";

class NumCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {
    return (
      <div className="col-md-6 col-xl-3 mb-4">
        <div className="card shadow border-start-primary py-2">
        <a
            //class="btn btn-primary btn-sm d-none d-sm-inline-block"
            role="button"
            //href="/table"
            style={{backgroundColor: 'white', textDecoration: 'none'}}
          >
          <div className="card-body">
          
            <div className="row align-items-center no-gutters">
              <div className="col me-2">
                <div className={this.props.type}>
                  <span>{this.props.title}</span>
                </div>
                <div className="text-dark fw-bold h5 mb-0">
                  <span>{this.props.value}</span>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-calendar fa-2x text-gray-300" />
              </div>
            </div>
            
          </div>
          </a>
        </div>
      </div>
    );
  }
}

export default NumCard;
