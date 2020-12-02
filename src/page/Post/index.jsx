import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Post.scss";
import { Header } from "../../components";
import { deletePost } from "../../actions/posts";

const PostPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const posts = useSelector(({ posts }) => posts);
  const post = posts.find(
    (post) => post.id === history.location.pathname.split("/")[2]
  );

  const createContentMarkup = () => {
    return { __html: post.content };
  };

  let date;
  if (post) {
    date = new Date(post.date).toLocaleString();
  }

  const goToHomePage = () => {
    history.push("/");
  };

  const removePost = () => {
    dispatch(deletePost(post.id));
    history.push("/");
  };

  return (
    <div className="post-page">
      {post ? (
        <React.Fragment>
          <Header title={post.title} />
          <div className="post-page__content">
            <div dangerouslySetInnerHTML={createContentMarkup()} />
            <div className="post-page__author">автор: {post.author}</div>
            <div className="post-page__date">{date}</div>
            <div className="post-page__button" onClick={goToHomePage}>
              на главную
            </div>
            <div
              className="post-page__button post-page__button--remove"
              onClick={removePost}
            >
              удалить
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="post-page__plug" onClick={goToHomePage}>такого поста нет</div>
      )}
    </div>
  );
};

export default PostPage;
