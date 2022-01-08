import React from "react";
import "./../styles/search-bar.css";

function SearchBar({ searchValue, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What do you want to search for?"
        value={searchValue}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
