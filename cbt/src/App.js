import React, { Component } from "react";
import Home from "./Components/Home";
import { ChatProvider, chatReducer } from "./Components/Context/context";
import WebApp from "../src/Components/WebApp";
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import template from "./components/template";
import Selection from "./components/selection";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import dataProcessing, {
  fossilFuelData,
  hydroElectricData,
  renewableEnergyData,
  biomassData
} from "./components/dataprocessing";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <WebApp/>
            <ChatProvider>
                <Home />
            </ChatProvider>
          </Router>
        </div>
    );
  }
}
export default App;

        // <Router>
        //       <Switch>
        //         <Fragment>

        //             {/* <Navbar/> */}
        //             <Route exact path='/' component = {Content}/>
        //         </Fragment>
        //       </Switch>
        // </Router>
