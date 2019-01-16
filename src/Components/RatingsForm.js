import React, { Component } from "react";
import { connect } from "react-redux";
import { createRating } from "../actions/actionCreators";
import PropTypes from "prop-types";

class RatingsForm extends Component {
  constructor() {
    super();
    this.state = {
      score: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const rating = {
      score: this.state.score,
      comment: this.state.comment
    };

    this.props.createRating(rating);
  }

  render() {
    return (
      <div>
        <h1>Add Rating</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Rating Score: </label>
            <br />
            <input
              type="text"
              name="score"
              onChange={this.onChange}
              value={this.state.score}
            />
          </div>
          <br />
          <div>
            <label>Comments: </label>
            <br />
            <textarea
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
            <br />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

RatingsForm.propTypes = {
  createRating: PropTypes.func.isRequired
};

export default connect(
  null,
  { createRating }
)(RatingsForm);
