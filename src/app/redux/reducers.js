import { ADD_SONG } from "./actionTypes";

const initialPlaylistState = {
  data: [],
};

export const playlist = (state = initialPlaylistState, action) => {
  switch (action.type) {
    case ADD_SONG: {
      return { data: [...state.data, action.payload.content] };
    }
    default: {
      return state;
    }
  }
};
