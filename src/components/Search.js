import React from "react";

function Search({setSearchTerm, searchTerm}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
