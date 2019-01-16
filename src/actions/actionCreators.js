// import { TEST } from "./types";
import { FETCH_RATINGS, NEW_RATING } from "./types";

// export const test = function() {
//   return { type: TEST };
// };

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
