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
import { putUserIntoReduxState } from "./actions/usersActions";
import { connect } from "react-redux";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MovieDetails from "./Components/MovieDetails";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#9E9E9E" }
  }
});

// const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      // Fetch user
      fetch("http://localhost:3000/api/v1/getUserFromToken", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.props.putUserIntoReduxState(user);
        });
    }
  }

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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    putUserIntoReduxState: user => dispatch(putUserIntoReduxState(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
