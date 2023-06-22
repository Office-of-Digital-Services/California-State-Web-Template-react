import React from 'react'

const MobileControls = () => {
  return (
    <div className="mobile-controls">
      <span className="mobile-control-group mobile-header-icons">
        {/* <!-- Add more mobile controls here. These will be on the right side of the mobile page header section --> */}
      </span>
      <div className="mobile-control-group main-nav-icons">
        <button id="nav-icon3" className="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Menu</span>
        </button>
      </div>
    </div>
  )
}

export default MobileControls