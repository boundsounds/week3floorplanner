import AppCSS from "./App.css"
import React, { Component } from 'react';
import { HousesList } from './Components/HousesList';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"


class App extends Component {
  render() {
    return (
      <div className="main-page">
      <h2 className="title">Floorplanner</h2>
      <div>
        <HousesList />
      </div>
      </div>
    )
  }
}

export default App;
