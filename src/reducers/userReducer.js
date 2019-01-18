// import { LOGIN, SIGNUP, LOGOUT } from "../actions/types";

// const initialState = {
//   currentUser: ""
// };

// export default function(currentState = initialState, action) {
//   console.log("in reducer");

//   const newState = { ...currentState };

//   switch (action.type) {
//     case LOGIN:
//       newState.currentUser = action.payload;
//       history.push("/homepage");
//       break;
//     case SIGNUP:
//       console.log("in reducer", action.payload);
//       newState.currentUser = action.payload;
//       history.push("/homepage");
//       break;
//     case LOGOUT:
//       console.log("out");
//       localStorage.clear();
//       newState.currentUser = null;
//       // history.push("/homepage");
//       break;
//     default:
//       return newState;
//   }
// }

// // newState.currentUser = null;
