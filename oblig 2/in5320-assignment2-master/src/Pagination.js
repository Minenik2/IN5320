// oppgave 4 pagination component
import React from "react";

function Pagination({ currentPage, totalPages, onNext, onPrev }) {
    // her for å få tak i pageCount så tar jeg med meg API objektet 
    // jeg er usikker på hvordan man eller hadde gjort det uten å lage mer useState()
    if (!totalPages.results) {
        // If the API request isn't completed return "loading...""
        return <p>Loading...</p>;
    } else {
        return (
            <div className="pagination">
                Page {currentPage} of {totalPages.pager.pageCount} 
            {currentPage > 1 && (
                <button onClick={onPrev} className="prev-button">
                Previous
                </button>
            )}
            {currentPage < totalPages.pager.pageCount && (
                <button onClick={onNext} className="next-button">
                Next
                </button>
            )}
            </div>
        );
    }
}

export default Pagination;