import React from 'react'

const HorizontalTracker = () => {
  return (
    // <!-- Static Process Bold -->
    <div className="row">
      <div className="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div className="text-center">
          <i className="dot-line progress-bold brd-transparent-before brd-primary-light-after">
            <span className="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 className="h5 m-b">Step 1</h3>
          <p className="m-b-0">Briefly discuss the step or identify the milestone.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div className="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div className="text-center">
          <i className="dot-line progress-bold brd-primary-light-before brd-primary-light-after">
            <span className="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 className="h5 m-b">Step 2</h3>
          <p className="m-b-0">Keep the message clear and concise.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div className="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div className="text-center">
          <i className="dot-line progress-bold brd-primary-light-before brd-gray-light-after">
            <span className="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 className="h5 m-b">Step 3</h3>
          <p className="m-b-0">Do not link to more information from the tracker.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div className="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div className="text-center">
          <i className="dot-line progress-bold brd-gray-light-before brd-transparent-after">
            <span className="dot-line-inner bg-grey-light brd-gray-light"></span>
          </i>
          <h3 className="h5 m-b">Step 4</h3>
          <p className="m-b-0">Instead, link to additional information in your body content or tracker caption.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>
    </div>
    // <!-- End Static Process -->
  )
}

export default HorizontalTracker