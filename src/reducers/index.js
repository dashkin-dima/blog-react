import { combineReducers } from "redux";

import posts from "./posts";
import authors from "./authors";

const rootReducer = combineReducers({
  posts,
  authors,
});

export default rootReducer;
