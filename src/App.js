import React from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import AddSong from "./app/components/AddSong";
import Playlist from "./app/components/Playlist";
import store from "./app/redux/store";

const App = () => {
  const state = useSelector((state) => state);

  return (
    <Provider store={store}>
      <header data-testid="header" className="App-header">
        My Playlist
      </header>
      <AddSong />
      <Playlist songs={state.data} />
    </Provider>
  );
};

export default App;
