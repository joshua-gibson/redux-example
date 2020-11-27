import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddSong from "./app/components/AddSong";
import Playlist from "./app/components/Playlist";
import store from "./app/redux/store";

const App = () => {
  console.log("store: ", store.getState().data);
  useEffect(() => {});
  return (
    <Provider store={store}>
      <header data-testid="header" className="App-header">
        My Playlist
      </header>
      <AddSong />
      <Playlist songs={store.getState().data} />
    </Provider>
  );
};

export default App;
