import { FETCH_RATINGS, NEW_RATING } from "../actions/types";
// import { FETCH_RATINGS, NEW_RATING, TEST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  // debugger;
  switch (action.type) {
    // case TEST:
    //   debugger;
    // return { ...state, test: true };
    case FETCH_RATINGS:
      console.log("reducer");
      return { ...state, items: action.payload };
    case NEW_RATING:
      let newState = { ...state, items: [...state.items, action.payload] };
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
