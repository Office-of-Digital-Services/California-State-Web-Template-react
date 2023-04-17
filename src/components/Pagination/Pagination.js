import React, { useEffect } from "react";

function Pagination({ currentPage = '1', totalPages }) {
  useEffect(() => {
    const paginator = document.querySelector("cagov-pagination");

    paginator.addEventListener("paginationClick", function (e) {
      // Replace the alert with your own code to retrieve the content for the requested page and write it into the DOM.
      alert(`You requested page ${e.detail}.`);
    });
  }, []);

  return (
    <cagov-pagination
      data-current-page={currentPage}
      data-total-pages={totalPages}
    ></cagov-pagination>
  );
}

export default Pagination;
