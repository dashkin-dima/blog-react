import React from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";

import "./Home.scss";
import { Header, Post } from "../../components";

const HomePage = () => {
  const history = useHistory();
  const posts = useSelector(({ posts }) => posts);

  const goToPageAddPost = () => {
    history.push("/add-post");
  }

  return (
    <div className="home-page">
      <Header title="записи" />
      <div className="home-page__content">
        {posts.length ? (
          posts.map((post) => <Post key={post.id} {...post} />)
        ) : (
          <div className="home-page__plug">записей нет</div>
        )}
        <div className="home-page__button" onClick={goToPageAddPost}>Добавить запись</div>
      </div>
    </div>
  );
};

export default HomePage;
