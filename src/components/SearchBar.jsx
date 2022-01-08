import React from "react";
import "./../styles/search-bar.css";

function SearchBar(props) {
  const { searchValue, onChange, onSearch } = props;

  const handleKeyPress = function (event) {
    const keyCode = event.code;
    if (keyCode === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="What do you want to search for?"
        value={searchValue}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
