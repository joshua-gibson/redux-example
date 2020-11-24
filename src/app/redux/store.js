import { createStore } from "redux";
import { playlist } from "./reducers";

export default createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
