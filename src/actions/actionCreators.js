import { FETCH_RATINGS, NEW_RATING } from "./types";

export const fetchRatings = () => dispatch => {
  console.log("fetching");

  fetch("http://localhost:3000/api/v1/ratings")
    .then(res => res.json())
    .then(ratings =>
      dispatch({
        type: FETCH_RATINGS,
        payload: ratings
      })
    );
};

export const createRating = ratingData => dispatch => {
  console.log("action called");
  fetch("http://localhost:3000/api/v1/ratings", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(ratingData)
  })
    .then(res => res.json())
    .then(rating =>
      dispatch({
        type: NEW_RATING,
        payload: rating
      })
    );
};
