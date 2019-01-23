import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { login } from "../actions/usersActions";
import { connect } from "react-redux";
import history from "../history";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    history.push("/Homepage");
  };

  render() {
    return (
      <div align="center">
        <br />
        <CssBaseline />
        <Paper
          style={{ padding: 40, margin: 100, maxWidth: 420 }}
          align="center"
        >
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography align="center" component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={e => this.handleOnSubmit(e)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                onChange={this.handleOnChange}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                onChange={this.handleOnChange}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </form>
          <br />
          <Button
            onClick={() => {
              history.push("/signup");
            }}
            fullWidth
            variant="contained"
            color="primary"
          >
            Not a user? Sign Up
          </Button>
        </Paper>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
