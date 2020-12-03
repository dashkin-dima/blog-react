const initialState = [];

const authors = (state = initialState, { type, payload }) => {
  switch (type) {
    case "AUTHOR:ADD":
      if (state.includes(payload)) return state;
      return [...state, payload];

    default:
      return state;
  }
};

export default authors;
