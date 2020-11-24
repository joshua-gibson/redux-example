import { ADD_SONG } from "./actionTypes";

export const addSong = (content) => ({
  type: ADD_SONG,
  payload: {
    content,
  },
});
