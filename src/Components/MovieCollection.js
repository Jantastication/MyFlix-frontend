import React from "react";
import { Row, Col } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import MovieCard from "./MovieCard";

const styles = {
  movieColumn: {
    marginBottom: 20
  }
};
const MovieCollection = props => {
  console.log("is this real?", props.movies);
  const movieColumns = props.movies
    ? props.movies.map(movie => (
        <Col key={movie.id} xs={12} sm={4} md={3} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))
    : null;

  return <Row>{movieColumns}</Row>;
};

export default MovieCollection;
withStyles(styles)(Row);

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
