import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./AddPost.scss";
import { Header } from "../../components";
import { addPost } from "../../actions/posts";

const AddPostPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const handleSubmit = () => {
    if (title) {
      const date = Date.now();
      const content = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      dispatch(addPost({ title, content, author, date }));
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
            className="add-post-page__input"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
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
