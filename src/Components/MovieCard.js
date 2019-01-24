import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getDetails, deleteMyMovie } from "../actions/usersActions.js";
import history from "../history";
import { CardContent } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ToggleIcon from "material-ui-toggle-icon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import { IconButton } from "material-ui";
import Visibility from "material-ui/svg-icons/action/visibility";
import VisibilityOff from "material-ui/svg-icons/action/visibility-off";
import myImage from "../Components/images/image-2019-01-24.png";

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
  state = {
    favorite: false
  };

  setIcon() {
    if (!this.state.favorite) {
      return <FavoriteBorderIcon />;
    } else {
      return <FavoriteIcon />;
    }
  }

  onToggleHandler = () => {
    console.log("click");
    this.setState({ favorite: !this.state.favorite });
  };

  handleClick = () => {
    // console.log("click");
    let movie = this.props.movie.imdbid;
    this.props.getDetails(movie);
    history.push(`movie/${this.props.movie.imdbid}`);
  };

  render() {
    // console.log("Movie Card: ", this.props);
    if (this.props.movie.title === "Movie not found.") {
      return (
        <div>
          <b
            style={{
              color: "#d4d4dc"
            }}
          >
            <i>
              Sorry! The movie you are looking for hasn't made the cut to be
              featured in our exclusive database.
            </i>
          </b>
        </div>
      );
    } else {
      return (
        <Card>
          <CardContent>
            <b>{this.props.movie.title}</b>
            <CardMedia onClick={this.handleClick}>
              {this.props.movie.poster === "N/A" ? (
                <img src={myImage} width="230" height="320" alt="" />
              ) : (
                <img
                  style={styles.bgImage}
                  src={this.props.movie.poster}
                  alt=""
                />
              )}
            </CardMedia>
            {this.props.canDelete && (
              <div>
                <Button
                  // variant="contained"
                  color="default"
                  onClick={() =>
                    this.props.deleteMyMovie(
                      this.props.movie.id,
                      this.props.currentUser.id
                    )
                  }
                >
                  <DeleteIcon />
                </Button>
                <Button onClick={this.onToggleHandler}>{this.setIcon()}</Button>
              </div>
            )}
          </CardContent>
        </Card>
      );
    }
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
