import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddSong from "./app/components/AddSong";
import Playlist from "./app/components/Playlist";
import store from "./app/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <header data-testid="header" className="App-header">
        My Playlist
      </header>
      <AddSong />
      <Playlist songs={[{ content: "song 1" }]} />
    </Provider>
  );
};

export default App;
