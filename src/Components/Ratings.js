import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RatingsForm from "./RatingsForm";
import { Rating } from "material-ui-rating";

// import { test } from "../actions/actionCreators";
import { fetchRatings } from "../actions/usersActions";

class Ratings extends Component {
  componentDidMount() {
    this.props.fetchRatings();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newRating) {
  //     this.props.ratings.unshift(nextProps.newRating);
  //   }
  // }

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
        <RatingsForm />
        {/* <Rating
          onRate={() => console.log("onRate")}
          value={3}
          max={5}
          onChange={() => console.log("onChange")}
        /> */}
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
  ratings: state.ratings,
  // .items,
  newRating: state.ratings
  // .item
});

export default connect(
  mapStateToProps,
  { fetchRatings }
)(Ratings);

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

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps,

//   { fetchRatings }
// )(Ratings);
