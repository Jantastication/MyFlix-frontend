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
  },
  movieContainer: {
    margin: 200
  }
};

class UserProfile extends Component {
  componentWillMount() {
    this.props.getMyMovies(this.props.currentUser.id);
    // Fetch those movies!!
    // in the actionCreator THAT YOU CREATE
    // fetch("localhost:3000/myMovies")
  }

  render() {
    // const myMovies =
    //   // [] |
    //   this.props.myMovies.map(myMovie => {}(
    //     <div key={myMovie.id}>
    //       <h3>{myMovie.Title}</h3>
    //       <p>{myMovie.Poster}</p>
    //     </div>
    //   ));
    return (
      <Grid style={styles.movieContainer}>
        <Row>....</Row>
        <Row>
          <br />
          <br />
          {/* <h6>
              <b>Click movie for Details: </b>
            </h6> */}
          <MovieCollection movies={this.props.myMovies} />
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
