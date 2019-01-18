import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import React, { Component } from "react";
import { signup } from "../actions/usersActions";
import { connect } from "react-redux";
// import history from "../history";

class Signup extends Component {
  state = {
    user_name: "",
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
    this.props.signup(this.state);
    // history.push("/homepage");
  };

  render() {
    return (
      <div align="center">
        <CssBaseline />
        <Paper
          style={{ padding: 40, margin: 100, maxWidth: 420 }}
          align="center"
        >
          <Avatar>
            <AddIcon />
          </Avatar>
          <Typography align="center" component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={e => this.handleOnSubmit(e)}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                onChange={this.handleOnChange}
                name="username"
                type="username"
                id="username"
              />
            </FormControl>
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
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default connect(
  null,
  { signup }
)(Signup);
