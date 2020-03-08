import React, { Component } from "react";
import Home from "./Components/Home";
import { ChatProvider, chatReducer } from "./Components/Context/context";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Checker from "./Components/Checker";
import Therapy from "./Components/Therapy";
import { ClassContext, Cosumer } from "./Components/Context/ClassContext";
import "./App.css";

import Content from "./Components/content";

class App extends Component {
  render() {
    return (
      <div>
        <ChatProvider>
          <BrowserRouter>
            <ClassContext>
              <Route exact path="/" component={Content} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Intense" component={Checker} />
              <Route exact path="/Therapy" component={Therapy} />
            </ClassContext>
          </BrowserRouter>
        </ChatProvider>
      </div>
    );
  }
}
export default App;
