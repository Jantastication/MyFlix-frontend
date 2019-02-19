import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import MovieCard from "./MovieCard";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};
class MovieCollection extends Component {
  render() {
    const movieColumns = this.props.movies
      ? this.props.movies.map((movie, index) => (
          <Col key={index} xs={12} sm={4} md={3} lg={3}>
            <MovieCard canDelete={this.props.canDelete} movie={movie} />
          </Col>
        ))
      : null;
    return (
      // <>
      <Row>{movieColumns}</Row>
      // </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.details,
    currentUser: state.currentUser,
    myMovies: state.myMovies
  };
};

// export default connect(
//   mapStateToProps,
//   { getDetails, deleteMyMovie }
// )(withStyles(styles)(MovieCard));

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(MovieCollection));

// export default class MovieCollection extends Component {
//   render() {
//     console.log("in movies comp", this.props.movies);
//     return (
//       <div>
//         <h4>Movie Collection </h4>

//         {/* <p>{this.props.movie.Title}</p>
//         <img src={this.props.movie.Poster} alt="" /> */}
//         {/* <p>{movie.title}</p>
//         <img src={movie.poster} width="200" /> */}
//         {this.props.movies.map(movie => {
//           console.log(movie);
//           return <MovieCard movie={movie} key={movie.id} />;
//         })}
//       </div>
//     );
//   }
// }
