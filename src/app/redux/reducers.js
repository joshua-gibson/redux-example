import { ADD_SONG } from "./actionTypes";

const initialPlaylistState = {
  data: ["song 1", "song 2"],
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
