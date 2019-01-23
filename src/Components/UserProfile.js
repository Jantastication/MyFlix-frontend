import React, { Component } from "react";
import { Row, Col, Grid } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import MovieCollection from "./MovieCollection";
import { getMyMovies } from "../actions/usersActions";
import { connect } from "react-redux";

const styles = {
  movieColumn: {
    marginBottom: 20
  },
  movieContainer: {
    margin: 200
  }
};

class UserProfile extends Component {
  componentDidMount() {
    // console.log(this.props.currentUser);
    console.log(JSON.parse(localStorage.user).id);

    if (this.props.currentUser) {
      this.props.getMyMovies(JSON.parse(localStorage.user).id);
    }
    // Fetch those movies!!
    // in the actionCreator THAT YOU CREATE
    // fetch("localhost:3000/myMovies")
  }

  render() {
    return (
      <Grid style={styles.movieContainer}>
        <h1
          style={{
            color: "#d4d4dc"
          }}
        >
          {" "}
          Your Watchlist:
        </h1>
        <Row>....</Row>
        <Row>
          <br />
          <br />
          lol
          <MovieCollection canDelete movies={this.props.myMovies} />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  myMovies: state.myMovies,
  currentUser: state.currentUser
});
const mapDispatchToProps = dispatch => {
  return {
    getMyMovies: userId => dispatch(getMyMovies(userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(UserProfile));
