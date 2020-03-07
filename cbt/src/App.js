import React, { Component } from "react";
import Home from "./Components/Home";
import { ChatProvider, chatReducer } from "./Components/Context/context";
import Checker from "./Components/Checker";

class App extends Component {
  render() {
    return (
      <div>
        <ChatProvider>
          <Home />
          <Checker />
        </ChatProvider>
      </div>
    );
  }
}
export default App;
