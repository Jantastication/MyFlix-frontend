import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { test } from "../actions/actionCreators";
import { fetchRatings } from "../actions/actionCreators";

class Ratings extends Component {
  componentWillMount() {
    this.props.fetchRatings();
  }

  render() {
    const ratingItems =
      [] ||
      this.props.ratings.map(rating => (
        <div key={rating.id}>
          <h3>{rating.score}</h3>
          <p>{rating.comment}</p>
        </div>
      ));
    // console.log(this.state);
    return (
      <div>
        <h1>Ratings</h1>
        {ratingItems}
        {/* <button onClick={this.props.makeTestFalse}>
          Test is {this.props.test}
        </button> */}
      </div>
    );
  }
}

Ratings.propTypes = {
  fetchRatings: PropTypes.func.isRequired,
  ratings: PropTypes.array.isRequired,
  newRating: PropTypes.object
};

const mapStateToProps = state => ({
  ratings: state.ratings
  // .items
});

// const mapDispatchToProps = dispatch => {
//   return {
//     makeTestFalse: () => dispatch(test())
//   };
// };

// const mapStateToProps = state => {
//   return {
//     test: state.test
//   };
// };

export default connect(
  mapStateToProps,
  { fetchRatings }
)(Ratings);

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps,

//   { fetchRatings }
// )(Ratings);
