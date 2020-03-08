import React, { Component } from "react";
import template from "./template";
import Selection from "./selection";
import Dashboard from "./Dashboard";
import dataProcessing, {
  fossilFuelData,
  hydroElectricData,
  renewableEnergyData,
  biomassData
} from "./dataprocessing";
import { Menu, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class content extends Component {
  state = template;

  copyDataSeries = (obj = {}) => {
    this.setState({
      ...obj,

      charts: [
        { serie: fossilFuelData, title: "Phobia" },
        { serie: hydroElectricData, title: "Anxiety" },
        { serie: renewableEnergyData, title: "Addiction" },
        { serie: biomassData, title: "Depression" }
      ]
    });
  };
  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu stackable>
          <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>

          <Menu.Item
            name="features"
            active={activeItem === "features"}
            onClick={this.handleItemClick}
          >
            Features
          </Menu.Item>

          <Menu.Item
            name="testimonials"
            active={activeItem === "testimonials"}
            onClick={this.handleItemClick}
          >
            Testimonials
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
          >
            Sign-in
          </Menu.Item>
          <Input
            size="large"
            style={searchStyle}
            icon="search"
            placeholder="Search..."
          />
        </Menu>
        {/* graph */}
        <div className="container bg-light">
          <h1 className="text-center mt-5">
            National institute of mental health
          </h1>
          <p className="text-center">
            Source:&nbsp;
            <a href="https://www.eia.gov">
              U.S. Energy Information Administration
            </a>{" "}
          </p>
        </div>
        <div className="container  mb-5 pb-3 bg-light">
          <div
            className={
              "text-center mb-0 pt-3 bold " +
              (this.state.msg !== "Select the range" ? "text-danger" : "")
            }
          >
            <strong>{this.state.msg}</strong>
          </div>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYear={this.handleChangeYear}
            onSubmit={this.handleSubmit}
          />
          <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
          />
        </div>
      </>
    );
  }
}

const searchStyle = {
  float: "right",
  marginLeft: "auto",
  fontSize: "15px",
  fontWeight: "Bold"
};
