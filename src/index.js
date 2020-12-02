import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import store from "./store";

import "./normalize.css";
import App from "./App";


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById("root")
);
