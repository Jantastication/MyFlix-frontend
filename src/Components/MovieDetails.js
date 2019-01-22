import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
// import { getDetails } from "../actions/usersActions.js";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addMovie } from "../actions/usersActions";
// import { getMyMovies } from "../actions/usersActions";

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
    if (!this.props.movie) {
      return <div />;
    } else {
      return (
        <Grid>
          <br />
          <Card>
            <CardMedia />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <h4>
                  <b>{this.props.movie.Title}</b>
                </h4>
              </Typography>
              <br />
              <Typography component="p">
                <img src={this.props.movie.Poster} alt="" />
              </Typography>
              <br />
              <Typography component="p">
                <div>
                  <b>Plot:</b> {this.props.movie.Plot}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Actors:</b> {this.props.movie.Actors}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Rated:</b> {this.props.movie.Rated}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>IMDB ID:</b> {this.props.movie.imdbID}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Runtime:</b> {this.props.movie.Runtime}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Awards:</b> {this.props.movie.Awards}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Released:</b> {this.props.movie.Released}
                </div>
              </Typography>
              <Typography component="p">
                <div>
                  <b>Website:</b> {this.props.movie.Website}
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.props.addMovie(
                    this.props.movie.imdbID,
                    this.props.currentUser.id,
                    this.props.movie.Title,
                    this.props.movie.Poster
                  )
                }
              >
                {/* do conditional rendering here to display correct buttons */}
                {/* example:
                    this.props.movie.rating.score !== null ?
                    true buttons
                    :
                    false buttons
                */}
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
// map action addItem here
export default connect(
  mapStateToProps,
  { addMovie }
)(withStyles(styles)(MovieDetails));
