// oppgave 3 page size component
import React from "react";

function PageSizeSelector({ pageSize, setPageSize }) {
  const handlePageSizeChange = (e) => {
    e.preventDefault()
    setPageSize(Number(e.target.value)); // Convert to a number
  };

  return (
    <div>
      <label htmlFor="pageSize">Results per page:</label>
      <select
        id="pageSize"
        value={pageSize}
        onChange={handlePageSizeChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default PageSizeSelector;