import React, { useState } from "react";
import { connect } from "react-redux";
import { addSong } from "../redux/actions";

function AddSong({ addSong }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setValue("");
    addSong(value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleOnChange}
        value={value}
        placeholder="Song Title"
      />
      <button onClick={handleAdd}>Add Song</button>
    </>
  );
}

export default connect(null, { addSong })(AddSong);
