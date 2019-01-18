import { LOGIN, LOGOUT, SIGNUP, SEARCH_MOVIES } from "./types";
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
  return dispatch => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(movies => {
        console.log("getting movie back", movies);

        dispatch({
          type: SEARCH_MOVIES,
          payload: movies
        });
      });
  };
};
