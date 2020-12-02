import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";
import { AddPostPage, HomePage, PostPage } from "./page";

const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <Route path="/" component={HomePage} exact/>
        <Route path="/add-post" component={AddPostPage} exact />
        <Route path="/post/:id" component={PostPage} exact />
      </div>
    </div>
  );
};

export default App;
