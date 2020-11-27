import React, { useState, setState } from "react";
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
        placeholder="Your text here"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default connect(null, { addSong })(AddSong);
