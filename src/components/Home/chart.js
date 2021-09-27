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
              categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            }
          },
          series: [
            {
              name: "Average",
              data: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, ],
            },
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