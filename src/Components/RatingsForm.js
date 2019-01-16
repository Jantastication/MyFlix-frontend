import React, { Component } from "react";

export default class RatingsForm extends Component {
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

    fetch("http://localhost:3000/api/v1/ratings", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(rating)
    })
      .then(res => res.json())
      .then(data => console.log(data));
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
