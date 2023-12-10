import React, { useState } from "react";
import { GlobalContent } from "../context";

const Search = () => {
  const { setSearchText, searchEachItem, searchSingleItem } = GlobalContent();
  const [Value, setValue] = useState("");
  const handle = (e) => {
    e.preventDefault();
    setSearchText(Value);
    searchEachItem();
    setValue("");
  };

  const handler = (e) => {
    e.preventDefault();
    searchSingleItem();
  };

  return (
    <div className="navbar">
      <form>
        <input
          type="text"
          className="input-text"
          placeholder="Enter your favourite"
          value={Value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="input-btn" onClick={handle}>
          Search
        </button>
        <button className="suprise-btn" onClick={handler}>
          Random Search
        </button>
      </form>
    </div>
  );
};

export default Search;
