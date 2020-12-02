import { createStore } from "redux";
import rootReducers from "./reducers";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = createStore(
  rootReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe((_) => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
