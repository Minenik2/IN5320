import React, { useState } from "react";

function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
    const [countryName, setCountryName] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        handleSearch(countryName)
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={countryName}
          placeholder="Enter search term"
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }

  export default SearchBar;