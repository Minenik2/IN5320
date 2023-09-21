// Pagination.js
import React from "react";

function Pagination({ currentPage, totalPages, onNext, onPrev }) {
    console.log(currentPage)
    if (!currentPage.results) {
        // If the API request isn't completed return "loading...""
        return <p>Loading...</p>;
    } else {
        return (
            <div className="pagination">
            {currentPage.pager.page > 1 && (
                <button onClick={onPrev} className="prev-button">
                Previous
                </button>
            )}
            {currentPage.pager.page < totalPages.pager.pageCount && (
                <button onClick={onNext} className="next-button">
                Next
                </button>
            )}
            </div>
        );
    }
}

export default Pagination;