import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { v4 as uuid } from "uuid";

import { Header } from "../../components";
import { addPost } from "../../actions/posts";
import { addAuthor } from "../../actions/author";

import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddPost.scss";

const AddPostPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const authors = useSelector(({ authors }) => authors);

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [authorsList, setAuthorsList] = React.useState(authors);
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
    setAuthorsList(authors.filter((item) => item.includes(author)));
  };

  const handleSubmit = () => {
    if (title) {
      const date = Date.now();
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      dispatch(addPost({ title, content, author, date }));
      dispatch(addAuthor(author));
      history.push("/");
    } else {
      alert("введите заголовок");
    }
  };

  const handleClear = () => {
    setTitle("");
    setAuthor("");
    setEditorState(EditorState.createEmpty());
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="add-post-page">
      <Header title="Добавить запись" />
      <div className="add-post-page__content">
        <div className="add-post-page__input-form">
          заголовок:
          <input
            className="add-post-page__input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="add-post-page__input-form">
          автор:
          <input
            className="add-post-page__input add-post-page__input--author"
            value={author}
            onChange={handleAuthor}
          />
          {!(authorsList.length === 0) && (
            <div className="add-post-page__author-search">
              {authorsList.map((author) => (
                <div
                  className="add-post-page__author-search-item"
                  key={uuid()}
                  onClick={() => setAuthor(author)}
                >
                  {author}
                </div>
              ))}
            </div>
          )}
        </div>

        <Editor
          editorState={editorState}
          wrapperClassName="add-post-page__editor"
          editorClassName="add-post-page__editor-content"
          onEditorStateChange={(editorState) => setEditorState(editorState)}
        />
        <div className="add-post-page__buttons">
          <div
            className="add-post-page__button add-post-page__button--submit"
            onClick={handleSubmit}
          >
            добавить
          </div>
          <div
            className="add-post-page__button add-post-page__button--clear"
            onClick={handleClear}
          >
            очистить
          </div>
          <div
            className="add-post-page__button add-post-page__button--cancel"
            onClick={handleCancel}
          >
            отмена
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostPage;
