import {
  FETCH_RATINGS,
  NEW_RATING,
  LOGIN,
  SIGNUP,
  LOGOUT
} from "../actions/types";
import { SET_MOVIES } from "../actions/types";
import { GET_DETAILS } from "../actions/types";
import { ADD_MOVIE } from "../actions/types";
import history from "../history";

const initialState = {
  items: [],
  item: {},
  movies: [],
  currentUser: "",
  myMovies: []
};

const reducer = function(currentState = initialState, action) {
  const newState = { ...currentState };

  switch (action.type) {
    case SET_MOVIES:
      console.log("in reducer", action.payload);
      newState.movies = action.payload; //hc
      console.log("newState.movies in reducer", newState.movies);
      break;
    case GET_DETAILS:
      newState.details = action.payload;
      console.log(newState);
      break;
    case ADD_MOVIE:
      console.log("is this a movie ratings instance", action.payload);
      // newState = { ...newState, movie: [...newState.movies, action.payload] };
      newState.myMovies = [...newState.myMovies, action.payload];
      console.log(newState, "add to list reducer");
      break;
    case FETCH_RATINGS:
      console.log("fetch ratings reducer");
      newState = { ...newState, items: action.payload };
      break;
    case NEW_RATING:
      newState = { ...newState, items: [...newState.items, action.payload] };
      break;
    case LOGIN:
      newState.currentUser = action.payload;
      history.push("/homepage");
      break;
    case SIGNUP:
      newState.currentUser = action.payload;
      history.push("/homepage");
      break;
    case LOGOUT:
      console.log("out");
      localStorage.clear();
      history.push("/login");
      break;
  }
  return newState;
};

export default reducer;

// const reducer = (state = initialState, action) => {
// const reducer = (state = currentState, action) => {

// case SET_MOVIES:
//       console.log("in reducer", action.payload);
//       // state = { ...state, movies: action.payload }; // alan, gives map error
//       newState.movies = action.payload; //hc
//       console.log("newState.movies in reducer", newState.movies);
//       // newState = {
//       //   items: newState.items,
//       //   item: newState.item,
//       //   movies: action.payload,
//       //   currentUser: newState.currentUser
//       // };
