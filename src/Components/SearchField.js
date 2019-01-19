import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { searchMovies } from "../actions/usersActions.js";
import { connect } from "react-redux";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class SearchField extends React.Component {
  state = {
    searchInput: ""
  };

  componentDidMount() {
    this.forceUpdate();
    console.log("search input", this.state.searchInput);
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submitting search.");

    this.props.searchMovies(this.state.searchInput);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <FormControl
            className={classes.formControl}
            aria-describedby="component-helper-text"
          >
            <InputLabel htmlFor="component-helper">Search</InputLabel>
            <Input
              id="component-helper"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
            <FormHelperText id="component-helper-text">
              <i> Search: "The Wolf of Wall Street.."</i>
            </FormHelperText>
          </FormControl>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   searchInput: state.searchInput
// });

SearchField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  { searchMovies }
)(withStyles(styles)(SearchField));
