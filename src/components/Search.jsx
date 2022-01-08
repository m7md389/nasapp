import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import "./../models/NasappModel";
import "./../styles/search.css";
import SearchResaults from "./SearchResaults";

function Search(props) {
  const NASA_API_URL = "https://images-api.nasa.gov/search?q=";

  let [searchResaults, setSearchResaults] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [searchTopic, setSearchContnet] = useState("");

  const handleChange = function (e) {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearch = async function () {
    if (!searchValue.replace(/ /g, "")) return null;
    const apiResault = await axios.get(NASA_API_URL + searchValue);
    setSearchResaults(apiResault.data.collection.items);
    setSearchContnet(searchValue);
    setSearchValue("");
  };

  const getHeaderText = function () {
    if (!!searchTopic) {
      if (searchResaults.length > 0) return "Resault for search about ";
      return "No resaults found for search about ";
    }
    return null;
  };
  return (
    <div className="search">
      <SearchBar
        onChange={handleChange}
        onSearch={handleSearch}
        searchValue={searchValue}
      />
      <h2>
        {getHeaderText()}
        <span>{searchTopic}</span>
      </h2>
      {searchResaults && (
        <SearchResaults
          searchResaults={searchResaults}
          isSavedAstronomyPicture={isSavedAstronomyPicture}
          reloadFavourites={reloadFavourites}
        />
      )}
    </div>
  );
}

export default Search;
