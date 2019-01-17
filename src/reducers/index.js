import { combineReducers } from "redux";
import ratingReducer from "./ratingReducer";
import userReducer from "./userReducer";

export default combineReducers({
  ratings: ratingReducer,
  users: userReducer
});
