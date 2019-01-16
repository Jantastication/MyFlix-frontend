import React, { Component } from "react";
// import { Router } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router";
import AppBar from "./Components/AppBar";
import Ratings from "./Components/Ratings";
import RatingsForm from "./Components/RatingsForm";
// import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
// import HomePage from "./Components/HomePage";
// import MovieContainer from "./Components/MovieContainer";

const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        {/* <Router> */}
        {/* // history={history} */}
        {/* <Switch>
            <Route path="/Login" component={Login} /> */}
        {/* <Route path="/Signup" component={SignUp} /> */}
        {/* <Route path="/homepage" component={HomePage} /> */}
        {/* <Route path="/Ratings" component={Ratings} />
            <Route path="/Ratings Form" component={RatingsForm} />
            <Route path="/Movie" component={MovieContainer} /> */}

        <Login />
        <Ratings />
        <hr />
        <RatingsForm />
        {/* </Switch>
        </Router> */}

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
