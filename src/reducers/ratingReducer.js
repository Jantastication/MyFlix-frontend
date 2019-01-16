import { FETCH_RATINGS, NEW_RATING, TEST } from "../actions/types";

const InitialState = {
  items: [],
  item: {}
};

export default function(state = InitialState, action) {
  debugger;
  switch (action.type) {
    case TEST:
      debugger;
      return { ...state, test: true };
    default:
      return state;
  }
}
