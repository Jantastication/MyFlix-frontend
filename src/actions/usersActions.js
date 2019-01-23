import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  SET_MOVIES,
  GET_DETAILS,
  DELETE_MYMOVIE
} from "./types";
import { FETCH_RATINGS, NEW_RATING } from "./types";
import { ADD_MOVIE, GET_MYMOVIES } from "./types";
// import { func } from "prop-types";
const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

export const login = user => {
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({
          type: LOGIN,
          payload: result
        });
      });
  };
};
export const putUserIntoReduxState = user => {
  return {
    type: LOGIN,
    payload: user
  };
};
export const logout = () => {
  console.log("logout action");

  return { type: LOGOUT };
};

export const signup = user => {
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({ type: SIGNUP, payload: result });
      });
  };
};

export const searchMovies = query => {
  console.log("searching");
  return function(dispatch) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(movies => {
        console.log("getting movie back", movies.Search);

        dispatch({
          type: SET_MOVIES,
          payload: movies.Search
        });
      });
  };
};

export const getDetails = imdbID => {
  console.log("go get deets");
  return function(dispatch) {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(details => {
        console.log(details);
        dispatch({
          type: GET_DETAILS,
          payload: details
        });
      });
  };
};

export const addMovie = (MovieID, UserID, title, poster) => {
  return function(dispatch) {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/api/v1/ratings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        imdbID: MovieID,
        user_id: UserID,
        title: title,
        poster: poster
      })
    })
      .then(res => res.json())
      .then(movie => {
        console.log("movie added", movie);
        dispatch({
          type: ADD_MOVIE,
          payload: movie
        });
      });
  };
};

export const getMyMovies = userId => {
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/myMovies/${userId}`)
      .then(res => res.json())
      .then(user => {
        dispatch({
          type: GET_MYMOVIES,
          payload: user
        });
      });
    //get the movies on my watchlist
    // fetch("localhost:3000/myMovies")
  };
};

export const deleteMyMovie = (movieId, userId) => {
  console.log("delete the beech", movieId);
  return function(dispatch) {
    fetch(`http://localhost:3000/api/v1/myMovies/${movieId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ user_id: userId })
    }).then(
      dispatch({
        type: DELETE_MYMOVIE,
        payload: movieId
      })
    );
  };
  //delete the rating,
  //that will remove from my list
};

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
