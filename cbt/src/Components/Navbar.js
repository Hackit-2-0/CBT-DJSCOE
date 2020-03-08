import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>

        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          <Link to="/Home">Diagnostic Test</Link>
        </Menu.Item>

        <Menu.Item
          name="testimonials"
          active={activeItem === "testimonials"}
          onClick={this.handleItemClick}
        >
          <Link to="/Intense">Intense Quiz Test</Link>
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}
