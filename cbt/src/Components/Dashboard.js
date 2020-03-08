import React, { Component } from "react";
import Chart from "./chart";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        {this.props.charts &&
          this.props.charts.map((chart, i) => {
            return (
              <div className="col-xs-12 col-sm-6 mb-2" key={i}>
                <Chart
                  data={chart.serie}
                  userConfig={this.props.userConfig}
                  titleName={chart.title}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Dashboard;
