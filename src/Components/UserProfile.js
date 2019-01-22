import React, { Component } from "react";
// import GridList from "@material-ui/core/GridList";
import { Row, Col, Grid } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import MovieCollection from "./MovieCollection";
import { getMyMovies } from "../actions/usersActions";
import { connect } from "react-redux";
import MyMovies from "./MyMovies";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};

class UserProfile extends Component {
  componentDidMount() {
    this.props.getMyMovies();
    // Fetch those movies!!
    // in the actionCreator THAT YOU CREATE
    // fetch("localhost:3000/myMovies")
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.myMovie) {
  //     this.props.myMovies.unshift(nextProps.myMovie);
  //   }
  // }

  render() {
    // const myMovies =
    //   // [] ||
    //   this.props.myMovies.map(myMovie => {}(
    //     <div key={myMovie.id}>
    //       <h3>{myMovie.Title}</h3>
    //       <p>{myMovie.Poster}</p>
    //     </div>
    //   ));
    return (
      <div>
        <br />
        <br />
        <br />
        <Grid>
          <br />
          <br />
          <h4>
            <b>My WatchList</b>
          </h4>
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
