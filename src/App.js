import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import { Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
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
