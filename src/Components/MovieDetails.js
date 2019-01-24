import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addMovie } from "../actions/usersActions";
import myImage from "../Components/images/image-2019-01-24.png";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

class MovieDetails extends Component {
  render() {
    console.log(this.props);
    if (!this.props.movie) {
      return <div />;
    } else {
      const { movie } = this.props;

      return (
        <Grid>
          <br />
          <br />
          <br />
          <Card>
            <CardMedia />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <h4>
                  <b>{movie.title}</b>
                </h4>
              </Typography>
              <br />
              <Typography component="p">
                {movie.poster === "N/A" ? (
                  <img src={myImage} width="230" height="320" alt="" />
                ) : (
                  <img src={movie.poster} alt="" />
                )}
              </Typography>
              <br />
              <Typography component="p">
                <div>
                  <b>Plot:</b> {movie.plot}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Actors:</b> {movie.actors}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Rated:</b> {movie.rated}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>IMDB ID:</b> {movie.imdbID}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Runtime:</b> {movie.runtime}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Awards:</b> {movie.awards}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Released:</b> {movie.released}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Website:</b> {movie.website}
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.props.addMovie(
                    movie.imdbid,
                    this.props.currentUser.id,
                    movie.title,
                    movie.poster
                  )
                }
              >
                <b>Add To My Watchlist</b>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movie: state.details,
    currentUser: state.currentUser,
    myMovies: state.myMovies
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: (imbdid, userId, title, poster) => {
      return dispatch(addMovie(imbdid, userId, title, poster));
    }
  };
};
// map action addItem here
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MovieDetails));
