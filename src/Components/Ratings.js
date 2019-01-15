import React, { Component } from "react";
import { connect } from "react-redux";
import { test } from "../actions/actionCreators";
class Ratings extends Component {
  constructor() {
    super();
    this.state = {
      ratings: []
    };
  }

  ComponentWillMount() {
    fetch("http://localhost:3000/api/v1/ratings")
      .then(res => res.json())
      .then(data => this.setState({ ratings: data }));
  }
  render() {
    const ratingItems = this.state.ratings.map(rating => (
      <div key={rating.id}>
        <h3>{rating.score}</h3>
        <p>{rating.comment}</p>
      </div>
    ));
    return (
      <div>
        <h1>Ratings</h1>
        <button onClick={this.props.makeTestFalse}>
          Test is {this.props.test}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    makeTestFalse: () => dispatch(test())
  };
};

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ratings);
