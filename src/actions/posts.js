import { v4 as uuid } from "uuid";

export const addPost = (post) => ({
  type: "POST:ADD",
  payload: { ...post, id: uuid() },
});

export const deletePost = (id) => ({
  type: "POST:DELETE",
  payload: { id },
});
