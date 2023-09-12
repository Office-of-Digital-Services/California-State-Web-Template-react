import React from 'react'

/**
 * @summary This search bar appears on the right side of the header. This is the default search bar in the template.
 * @see https://template.webstandards.ca.gov/structure/search.html#Active-search
 * 
 * @example
 * <ActiveSearch />
 * 
 * @returns {React.ReactElement} Returns the ActiveSearch structure element
 */

const ActiveSearch = () => (
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

export default ActiveSearch