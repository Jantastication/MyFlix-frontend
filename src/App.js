import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import AppBar from "./Components/AppBar";
import Ratings from "./Components/Ratings";
import RatingsForm from "./Components/RatingsForm";
import history from "./history";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import UserProfile from "./Components/UserProfile";
import MovieContainer from "./Components/MovieContainer";
import Movies from "./Components/Movies";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#9E9E9E" }
  }
});

// const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <div>
              <AppBar />
              <Switch>
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/homepage" component={Homepage} />
                <Route exact path="/Ratings" component={Ratings} />
                <Route exact path="/RatingsForm" component={RatingsForm} />
                <Route exact path="/AllMovies" component={MovieContainer} />
                <Route exact path="/Profile" component={UserProfile} />
                <Route exact path="/Movies" component={Movies} />
                <Route path="/" render={() => <Redirect to="/homepage" />} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
