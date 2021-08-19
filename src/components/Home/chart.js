import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class PowerChart extends Component{
    constructor(props) {
        super(props);

        this.state = {
            options: {
            chart: {
              id: "basic-bar"
            },
            stroke: {
                curve: 'smooth',
              },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
            }
          },
          series: [
            {
              name: "Average",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
                name: "Last 24h",
                data: [10, 20, 30, 45, 67, 46, 37, 86]
              }
          ]
        };
      }

      render() {
          return(
            <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="area"
                  height="330"
                />
              </div>
            </div>
          </div>
          )
      }
}

export default PowerChart;