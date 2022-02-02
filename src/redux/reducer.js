import { combineReducers } from "redux";
import usersReducer from "./users/usersSlice";
import counterReducer from "./counter/counterSlice";
import moviesReducer from "./movies/movieSlice";

export default combineReducers({
  users: usersReducer,
  counter: counterReducer,
  movies: moviesReducer,
});
