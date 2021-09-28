import React, { Component } from "react";

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
            href="/table"
            style={{backgroundColor: 'white', textDecoration: 'none'}}
          >
          <div className="card-body">
          
            <div className="row align-items-center no-gutters">
              <div className="col me-2">
                <div>
                  <b><span style={{fontSize: 20, color: this.props.color}}>{this.props.title}</span></b>
                </div>
              </div>
              <div className="col-auto">
              <b><span style={{fontSize: 30, color: this.props.color}}>{this.props.value}</span></b>
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
