import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
// import { withStyles } from "@material-ui/core/styles";

// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <GridList cols={2.5}>my watchlist stuff</GridList> />
      </div>
    );
  }
}

// export default withStyles(styles)(UserProfile);
