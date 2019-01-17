import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import history from "../history";
import { connect } from "react-redux";
import { logout } from "../actions/usersActions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.classes = this.props.classes;
  }
  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={this.classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              onClick={() => {
                history.push("/homepage");
              }}
              variant="h6"
              color="inherit"
              className={this.classes.grow}
            >
              FLIXBOT
            </Typography>
            <Button
              onClick={() => {
                history.push("/profile");
              }}
              color="inherit"
            >
              My Profile
            </Button>
            <Button
              onClick={() => {
                history.push("/Movies");
              }}
              color="inherit"
            >
              Movies
            </Button>
            <Button
              onClick={() => {
                history.push("/login");
              }}
              color="inherit"
            >
              Login
            </Button>

            <Button
              onClick={() => {
                this.props.logout();
                history.push("/login");
              }}
              color="inherit"
            >
              Logout
            </Button>

            <Button
              onClick={() => {
                history.push("/signup");
              }}
              color="inherit"
            >
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(ButtonAppBar));
