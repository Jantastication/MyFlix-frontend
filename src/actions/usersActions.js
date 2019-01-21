import { LOGIN, LOGOUT, SIGNUP, SET_MOVIES, GET_DETAILS } from "./types";
import { FETCH_RATINGS, NEW_RATING } from "./types";
import { ADD_MOVIE, GET_MYMOVIES } from "./types";
// import { func } from "prop-types";
const API_KEY = `${process.env.REACT_APP_MOVIE_API_KEY}`;

export const login = user => {
  return function(dispatch) {
    console.log("we are in", user);
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
        dispatch({
          type: LOGIN,
          payload: result
        });
      });
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

export const addMovie = (MovieID, UserID) => {
  console.log("go to watch list", MovieID, UserID);
  return function(dispatch) {
    fetch("http://localhost:3000/api/v1/ratings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        imdbID: MovieID,
        user_id: UserID
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

export const deleteMyMovie = movieId => {
  console.log("delete the beech", movieId);
  fetch(`http://localhost:3000/api/v1/myMovies/${movieId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  });
  //delete the rating,
  //that will remove from your list
};

export const getMyMovies = userId => dispatch => {
  fetch(`http://localhost:3000/api/v1/myMovies/${userId}`)
    .then(res => res.json())
    .then(
      user => console.log(user)
      // dispatch({
      //   type: GET_MYMOVIES,
      //   payload: movies
      // })
    );
  //get the movies on my watchlist
  // fetch("localhost:3000/myMovies")
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
