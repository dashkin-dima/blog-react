const initialState = [];

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POST:ADD":
      return [...state, payload];
    case "POST:DELETE":
      console.log(payload)
      return state.filter((post) => post.id !== payload.id);
    case "POST:EDIT":
      return state;
    default:
      return state;
  }
};

export default posts;
