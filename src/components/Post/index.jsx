import React from "react";
import { useHistory } from "react-router-dom";

import "./Post.scss";
const Post = ({ title, author, date, id }) => {
  const history = useHistory();
  date = new Date(date).toLocaleString();

  const goToPagePost = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div className="post">
      <div className="post__title" onClick={goToPagePost}>
        {title}
      </div>
      <div className="page__description">
        <div className="post__author">{author}</div>
        <div className="post__date">{date}</div>
      </div>
    </div>
  );
};

export default Post;
