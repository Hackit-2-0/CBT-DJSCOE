import React, { Component } from "react";

const data = React.createContext({
  msg: ""
});

export class ClassContext extends Component {
  constructor() {
    super();
    this.state = "";
  }
  render() {
    return (
      <data.Provider value={this.state}>{this.props.children}</data.Provider>
    );
  }
}

export const Cosumer = data.Consumer;
