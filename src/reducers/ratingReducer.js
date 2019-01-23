import {
  FETCH_RATINGS,
  NEW_RATING,
  LOGIN,
  SIGNUP,
  LOGOUT,
  GET_MYMOVIES
} from "../actions/types";
import { SET_MOVIES } from "../actions/types";
import { GET_DETAILS } from "../actions/types";
import { ADD_MOVIE } from "../actions/types";
import { DELETE_MYMOVIE } from "../actions/types";
import history from "../history";

const initialState = {
  items: [],
  item: {},
  movies: [],
  currentUser: {},
  myMovies: [],
  details: {}
};
const moviePropertyNormalizer = movieArray => {
  //loop over each movie
  let normalized = movieArray.map((movie, index) => {
    let copy = {};
    Object.keys(movie).forEach(key => {
      copy[key.toLowerCase()] = movie[key];
    });
    return copy;
  });
  //loop over movie's properties
  //set the key to lowercase
  //keep the value
  return normalized;
};
const reducer = function(currentState = initialState, action) {
  let newState = { ...currentState };

  switch (action.type) {
    case SET_MOVIES:
      newState.movies = moviePropertyNormalizer(action.payload); //hc

      break;
    case GET_DETAILS:
      newState.details = moviePropertyNormalizer([action.payload])[0];
      console.log(newState);
      break;
    case ADD_MOVIE:
      // console.log("is this a movie ratings instance", action.payload);
      // newState = { ...newState, movie: [...newState.movies, action.payload] };
      newState.myMovies = [
        ...newState.myMovies,
        moviePropertyNormalizer([action.payload])[0]
      ];
      // console.log(newState, "add to list reducer");
      history.push("/profile");
      break;
    case GET_MYMOVIES:
      console.log("fetch getMyMovies reducer");
      newState = {
        ...newState,
        myMovies: moviePropertyNormalizer(action.payload)
      };
      break;
    case DELETE_MYMOVIE:
      const movieId = action.payload;
      newState.myMovies = newState.myMovies.filter(
        movie => movie.id !== movieId
      );
      break;
    case FETCH_RATINGS:
      // console.log("fetch ratings reducer");
      newState.ratings = { ...newState, items: action.payload };
      break;
    case NEW_RATING:
      newState = { ...newState, items: [...newState.items, action.payload] };
      break;
    case LOGIN:
      console.log("in reducer: ", action.payload);

      newState.currentUser = action.payload.user;
      history.push("/Movies");
      break;
    case SIGNUP:
      newState.currentUser = action.payload;
      history.push("/homepage");
      break;
    case LOGOUT:
      // console.log("out");
      localStorage.clear();
      newState.currentUser = {};

      history.push("/login");
      break;
  }
  return newState;
};

export default reducer;
