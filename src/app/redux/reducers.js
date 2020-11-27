import { ADD_SONG } from "./actionTypes";

const initialPlaylistState = {
  nextId: 2,
  data: {
    1: {
      content: "Test Content 1",
    },
  },
};

export const playlist = (state = initialPlaylistState, action) => {
  switch (action.type) {
    case ADD_SONG: {
      return {
        ...state,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload.content,
          },
        },
        nextId: state.nextId + 1,
      };
    }
    default: {
      return state;
    }
  }
};
