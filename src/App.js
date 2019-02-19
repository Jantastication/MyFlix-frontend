import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import AppBar from "./Components/AppBar";
import history from "./history";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import UserProfile from "./Components/UserProfile";
import { PrivateRoute } from "./Components/PrivateRoute";
import MovieContainer from "./Components/MovieContainer";
import { putUserIntoReduxState } from "./actions/usersActions";
import { connect } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MovieDetails from "./Components/MovieDetails";

// import MovieForm from "./Components/MovieForm";
// import Ratings from "./Components/Ratings";
// import RatingsForm from "./Components/RatingsForm";

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
  componentWillMount() {
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

              {/* {this.props.currentUser.id ? ( */}
              <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/homepage" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute
                  exact
                  path="/movie/:id"
                  component={MovieDetails}
                />
                <PrivateRoute exact path="/Movies" component={MovieContainer} />
                <PrivateRoute exact path="/profile" component={UserProfile} />

                {/* <Route path="/" render={() => <Redirect to="/Movies" />} /> */}
              </Switch>
              {/* ) : (
                <h6>....</h6>
              )} */}
            </div>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
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
