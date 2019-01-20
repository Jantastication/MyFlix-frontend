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
// import MovieCard from "./Components/MovieCard";
// import MovieForm from "./Components/MovieForm";
import MovieContainer from "./Components/MovieContainer";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MovieDetails from "./Components/MovieDetails";

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
              <AppBar classes={[]} />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/homepage" component={Homepage} />
                <Route exact path="/ratings" component={Ratings} />
                <Route exact path="/ratingsForm" component={RatingsForm} />
                {/* <Route exact path="/movieForm" component={MovieForm} /> */}
                <Route exact path="/movie/:id" component={MovieDetails} />
                <Route exact path="/movies" component={MovieContainer} />
                <Route exact path="/profile" component={UserProfile} />

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
