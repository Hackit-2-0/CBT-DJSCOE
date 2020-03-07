import React, { Component } from "react";
import Home from "./Components/Home";
import { ChatProvider, chatReducer } from "./Components/Context/context";

class App extends Component {
  render() {
    return (
      <div>
        <ChatProvider>
          <Home />
        </ChatProvider>
      </div>
    );
  }
}
export default App;
