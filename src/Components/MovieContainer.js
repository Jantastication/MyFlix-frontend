import React, { Component } from "react";
import MovieCollection from "./MovieCollection";
// import MovieDetails from "./MovieDetails";
import { Grid, Row, Col } from "react-bootstrap";
import SearchField from "./SearchField";
import { connect } from "react-redux";
import { searchMovies } from "../actions/usersActions.js";

// const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

class MovieContainer extends Component {
  render() {
    // console.log("movies");
    // console.log("OVER HERE", this.props.movies);
    return (
      <div
        style={{
          borderBottom: "5px solid grey",
          position: "relative"
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4
          style={{
            color: "#d4d4dc",
            marginLeft: 20
          }}
        >
          <i>
            {" "}
            Hey <b style={{ color: "cyan" }}> Janu </b>, what movie would you
            like info on?{" "}
          </i>
        </h4>
        <br />
        <Grid>
          <Row>
            <SearchField
              handleChange={event => console.log(event.target.value)}
              showNoResults={false}
            />
          </Row>
          <Row>....</Row>
          <Row>
            <br />
            <br />
            {/* <h6>
              <b>Click movie for Details: </b>
            </h6> */}
            <MovieCollection movies={this.props.movies} />
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(MovieContainer);
