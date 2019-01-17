import { LOGIN, LOGOUT, SIGNUP } from "./types";

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
