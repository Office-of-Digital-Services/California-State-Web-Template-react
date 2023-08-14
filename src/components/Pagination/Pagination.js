import React, { useEffect } from "react";
import PropTypes from 'prop-types';

/**
 * @summary Pagination via custom Web Component.
 * 
 * @example
 * <Pagination
 *   currentPage={'4'}
 *   totalPages={'10'}
 * />
 * 
 * @param {string} currentPage - Sets value for current page.
 * @param {string} totalPages - Sets value for total pages. 
 *  
 * @returns {React.ReactElement} returns Pagination component.
 */

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

Pagination.propTypes = {
  currentPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired
}

export default Pagination;
