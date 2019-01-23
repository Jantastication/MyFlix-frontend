import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import MovieDetails from "./MovieDetails";
import { connect } from "react-redux";
import { getDetails, deleteMyMovie } from "../actions/usersActions.js";
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
    let movie = this.props.movie.imdbid;
    this.props.getDetails(movie);
    history.push(`movie/${this.props.movie.imdbid}`);
  };

  render() {
    // console.log("Movie Card: ", this.props);

    return (
      <Card onClick={this.handleClick}>
        <b>{this.props.movie.title}</b>
        <CardMedia>
          {this.props.movie.poster === "N/A" ? (
            <img
              src="https://farm5.staticflickr.com/4112/5170590074_714d36db83_b.jpg"
              width="300"
              alt=""
            />
          ) : (
            <img style={styles.bgImage} src={this.props.movie.poster} alt="" />
          )}
        </CardMedia>
        <Button
          onClick={() =>
            this.props.deleteMyMovie(
              this.props.movie.id,
              this.props.currentUser.id
            )
          }
        >
          DELETE
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { getDetails, deleteMyMovie }
)(withStyles(styles)(MovieCard));
