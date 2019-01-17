import {
  FETCH_RATINGS,
  NEW_RATING,
  LOGIN,
  SIGNUP,
  LOGOUT
} from "../actions/types";
// import { FETCH_RATINGS, NEW_RATING, TEST } from "../actions/types";
import history from "../history";

const initialState = {
  items: [],
  item: {},
  currentUser: ""
};

const reducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case FETCH_RATINGS:
      console.log("reducer");
      state = { ...state, items: action.payload };
      break;
    case NEW_RATING:
      state = { ...state, items: [...state.items, action.payload] };
      break;
    case LOGIN:
      state.currentUser = action.payload;
      history.push("/homepage");
      break;
    case SIGNUP:
      state.currentUser = action.payload;
      history.push("/homepage");
      break;
    case LOGOUT:
      console.log("out");
      localStorage.clear();
      history.push("/login");
      break;
  }
  return state;
};

export default reducer;
