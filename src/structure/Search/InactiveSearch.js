import React from 'react'

/**
 * @summary This search bar is hidden (inactive) and becomes active when people select the search menu icon. This search is used on mobile and for sites that use icon menu (which includes the search icon).
 * @see https://template.webstandards.ca.gov/structure/search.html#Inactive-search
 * 
 * @example
 * <InactiveSearch />
 * 
 * @returns {React.ReactElement} Returns the InactiveSearch structure element.
 */

const InactiveSearch = () => (
  <div className="container">
    <form id="Search" className="pos-rel" action="/serp.html">
      <span className="sr-only" id="SearchInput">Custom Google Search</span>
      <input type="search" name="q" aria-labelledby="SearchInput" placeholder="Search" className="search-textfield" />
      <button type="submit" className="gsc-search-button">
        <span className="ca-gov-icon-search" aria-hidden="true"></span>
        <span className="sr-only">Submit</span>
      </button>
      <div className="close-search-btn">
        <button className="close-search gsc-clear-button border-0 bg-transparent pos-rel" type="reset">
          <span className="sr-only">Close</span>
        </button>
      </div>
    </form>
  </div>
)

export default InactiveSearch