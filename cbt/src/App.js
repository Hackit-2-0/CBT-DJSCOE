import React, { Component } from "react";
import Home from "./Components/Home";
import { ChatProvider, chatReducer } from "./Components/Context/context";
import { BrowserRouter, Route, Link } from "react-router-dom";
import WebApp from "./Components/WebApp";
import Checker from "./Components/Checker";

class App extends Component {
  render() {
    return (
      <div>
        <ChatProvider>
          <BrowserRouter>
            <Route exact path="/" component={WebApp} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Intense" component={Checker} />
          </BrowserRouter>
        </ChatProvider>
      </div>
    );
  }
}
export default App;
