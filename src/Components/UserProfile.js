import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import { Row, Col, Grid } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import MovieCollection from "./MovieCollection";
// import { withStyles } from "@material-ui/core/styles";

// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";

export default class UserProfile extends Component {
  componentWillMount() {
    // Fetch those movies!!
    // in the actionCreator THAT YOU CREATE
    // fetch("localhost:3000/myMovies")
  }
  render() {
    return (
      <div>
        <Grid>
          <b>My WatchList</b>
          <Row>
            {/* Customize this searchField to be a filter */}
            {/* <SearchField
              handleChange={event => console.log(event.target.value)}
              showNoResults={false} */}
          </Row>
          <Row>
            {/* Render the container/list right here */}
            <Row>
              <br />

              <MovieCollection movies={this.props.movies} />
            </Row>
          </Row>

          <b> My Watched and Rated Movies </b>
          <Row>
            {/* Customize this searchField to be a filter */}
            {/* <SearchField
              handleChange={event => console.log(event.target.value)}
              showNoResults={false}
            /> */}
          </Row>
          <Row>
            <br />
            <h5>{/* <b>Tap on the movie for Details: </b> */}</h5>
            <MovieCollection movies={this.props.movies} />
          </Row>
        </Grid>
      </div>
    );
  }
}
