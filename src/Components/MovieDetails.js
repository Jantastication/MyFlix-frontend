import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
// import { getDetails } from "../actions/usersActions.js";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
              <Button variant="contained" color="secondary">
                Add To My Watchlist
              </Button>
              {/* <Button size="small" color="primary">rate</Button> */}
            </CardActions>
          </Card>
        </Grid>
        // <div>
        //   <h3>movie details</h3>
        //   <br />
        //   <h4>{this.props.movie.Title}</h4>
        //   <br />
        //   <img src={this.props.movie.Poster} alt="" />
        //   <p>Rated: {this.props.movie.Rated}</p>
        //   <p>Year: {this.props.movie.Year}</p>
        //   <p>{this.props.movie.Plot}</p>
        //   <p>{this.props.movie.Actors}</p>
        //   <p>{this.props.movie.imdbID}</p>
        //   <p>{this.props.movie.Runtime}</p>
        //   <p>{this.props.movie.Awards}</p>
        //   <p>{this.props.movie.Released}</p>
        //   <p>{this.props.movie.Website}</p>
        // </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  movie: state.details
});

export default connect(mapStateToProps)(withStyles(styles)(MovieDetails));

// import React from "react";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import { connect } from "react-redux";
// import { getDetails } from "../actions/usersActions.js";

// class MovieDetails extends React.Component {
//   state = {
//     open: false,
//     scroll: "paper"
//   };

//   handleClickOpen = scroll => () => {
//     this.setState({ open: true, scroll });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     return (
//       <div>
//         <Button onClick={this.handleClickOpen("body")}>scroll=body</Button>
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           scroll={this.state.scroll}
//           aria-labelledby="scroll-dialog-title"
//         >
//           <DialogTitle id="scroll-dialog-title">About This Movie:</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               <h4>Movie deets</h4>
//               <p>Movie plot</p>{" "}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Add To WatchList
//             </Button>
//             <Button onClick={this.handleClose} color="primary">
//               Rate Movie
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { getDetails }
// )(MovieDetails);
