import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./Table.js";
import SearchBar from "./SearchBar.js"; // import the searchbar component
import PageSizeSelector from "./PageSizeSelector";
import Pagination from "./Pagination";

function App() {
  /* Create state:
        - apiData: List containing dictionaries of countries from API.
        - searchQuery: The query parameter that should be added to &search=
        - pageNumber: The page that is requested
  */

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(); // Default = No search query
  const [pageNumber, setPageNumber] = useState(1); //Default = Page 1
  const [pageSize, setPageSize] = useState(10) // oppgave 3 starter med 10 pages

  useEffect(() => {
    // All parameters are appended to this URL.
    let apiQuery = "https://dhis2-app-course.ifi.uio.no/api?";

    // If searchQuery isn't empty add &search=searchQuery to the API request.
    if (searchQuery) {
      apiQuery = apiQuery + "&search=" + searchQuery;
    }

    // Add what page we are requesting to the API request.
    apiQuery = apiQuery + "&page=" + pageNumber;

    // add the page size that we are requesting to the api, task 3
    apiQuery = apiQuery + "&pageSize=" + pageSize;

    // Query data from API.
    console.log("Querying: " + apiQuery);
    fetch(apiQuery)
      .then((results) => results.json())
      .then((data) => {
        // Then add response to state.
        setApiData(data);
      });
  }, [searchQuery, pageNumber, pageSize]); // Array containing which state changes that should re-reun useEffect()

  // funksjonen for oppgave 2 search component
  const handleSearch = (countryName) => {
    setSearchQuery(countryName)
  };

  // funksjonen for oppgave 4 pagination component
  const handleNextPage = () => {
    if (pageNumber < apiData.pager.pageCount) {
      setPageNumber(pageNumber + 1);
    }
  };

  // funksjonen for oppgave 4 pagination component
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  

  return (
    <div className="App">
      <h1>Country lookup</h1>
      <Table apiData={apiData} />
      <SearchBar
        handleSearch={handleSearch}
      />
      <PageSizeSelector
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
      <Pagination
        currentPage={pageNumber}
        totalPages={apiData}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
}

export default App;
