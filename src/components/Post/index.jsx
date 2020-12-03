import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import "./Post.scss";

const Post = React.memo(({ title, author, date, id }) => {
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
});

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}

Post.defaultProps = {
  title: "title",
  author: "author",
  date: "--.--.--, --:--:--",
}

export default Post;
