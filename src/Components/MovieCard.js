import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import MovieDetails from "./MovieDetails";
import { connect } from "react-redux";
import { getDetails } from "../actions/usersActions.js";
import history from "../history";

const styles = {
  cardTitle: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  cardMedia: {
    maxHeight: 394,
    overflow: "hidden"
  },
  card: {
    cursor: "pointer",
    height: 400,
    overflow: "hidden"
  },
  bgImage: {
    width: "100%"
  }
};

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }

  handleClick = () => {
    // console.log("click");
    let movie = this.props.movie.imdbID;
    this.props.getDetails(movie);
    history.push(`movie/${this.props.movie.imdbID}`);
  };

  render() {
    return (
      <Card onClick={this.handleClick}>
        <b>{this.props.movie.Title}</b>
        <CardMedia>
          {this.props.movie.Poster === "N/A" ? (
            <img
              src="https://farm5.staticflickr.com/4112/5170590074_714d36db83_b.jpg"
              width="300"
              alt=""
            />
          ) : (
            <img style={styles.bgImage} src={this.props.movie.Poster} alt="" />
          )}
        </CardMedia>
      </Card>
    );
  }
}

export default connect(
  null,
  { getDetails }
)(withStyles(styles)(MovieCard));
