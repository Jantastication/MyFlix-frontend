import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import reducer from "./reducers";
import reducer from "./reducers/ratingReducer";

// const middleware = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const initialState = {};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
