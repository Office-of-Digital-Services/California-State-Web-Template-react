import React from 'react'

/**
 * @summary This search is directly under the main menu in a prominent container. It's size and location means the website is intentionally showcasing search as a top task.
 * @see https://template.webstandards.ca.gov/structure/search.html#Featured-search
 * 
 * @example
 * <FeaturedSearch />
 * 
 * @returns {React.ReactElement} Returns the FeaturedSearch structure element.
 */

const FeaturedSearch = () => (
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

export default FeaturedSearch