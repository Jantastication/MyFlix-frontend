import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
// import { Router } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router";
import AppBar from "./Components/AppBar";
import Ratings from "./Components/Ratings";
class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Login />
        <Ratings />

        {/* <Router>
          <Switch>
            <Route />
            <Route />
          </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
