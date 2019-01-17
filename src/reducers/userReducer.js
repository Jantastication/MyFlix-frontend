import { LOGIN, SIGNUP, LOGOUT } from "../actions/types";
import history from "./history";

const initialState = {
  currentUser: ""
};

export default function(currentState = initialState, action) {
  const newState = { ...currentState };

  switch (action.type) {
    case LOGIN:
      newState.currentUser = action.payload;
      history.push("/homepage");
      break;
    case SIGNUP:
      newState.currentUser = action.payload;
      history.push("/login");
      break;
    case LOGOUT:
      console.log("out");
      localStorage.clear();
      history.push("/homepage");
      break;
    default:
      return newState;
  }
}
