import { combineReducers } from "redux";
import ratingReducer from "./ratingReducer";
import userReducer from "./userReducer";

export default combineReducers({
  ratings: ratingReducer,
  users: userReducer
});

// export const rootReducer = (state, action) => {
//   state = ratingReducer(state, action);
//   state = userReducer(state, action);
//   return state;
// };
