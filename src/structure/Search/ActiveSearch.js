import React from 'react'

const ActiveSearch = () => {
  return (
    <div class="container">
      <form id="Search" class="pos-rel" action="/serp.html">
        <span class="sr-only" id="SearchInput">Custom Google Search</span>
        <input type="text" name="q" aria-labelledby="SearchInput" placeholder="Search" class="search-textfield" />
        <button type="submit" class="gsc-search-button"><span class="ca-gov-icon-search" aria-hidden="true"></span><span class="sr-only">Submit</span></button>
        <div class="close-search-btn"><button class="close-search gsc-clear-button border-0 bg-transparent pos-rel" type="reset"><span class="sr-only">Close</span></button></div>
      </form>
    </div>
  )
}

export default ActiveSearch