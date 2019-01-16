import { combineReducers } from "redux";
import ratingReducer from "./ratingReducer";

export default combineReducers({
  ratings: ratingReducer
});
