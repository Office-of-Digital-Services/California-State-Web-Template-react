import React from 'react'

const HorizontalTracker = () => {
  return (
    // <!-- Static Process Bold -->
    <div class="row">
      <div class="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div class="text-center">
          <i class="dot-line progress-bold brd-transparent-before brd-primary-light-after">
            <span class="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 class="h5 m-b">Step 1</h3>
          <p class="m-b-0">Briefly discuss the step or identify the milestone.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div class="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div class="text-center">
          <i class="dot-line progress-bold brd-primary-light-before brd-primary-light-after">
            <span class="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 class="h5 m-b">Step 2</h3>
          <p class="m-b-0">Keep the message clear and concise.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div class="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div class="text-center">
          <i class="dot-line progress-bold brd-primary-light-before brd-gray-light-after">
            <span class="dot-line-inner bg-primary-light bg-primary-before brd-primary-light"></span>
          </i>
          <h3 class="h5 m-b">Step 3</h3>
          <p class="m-b-0">Do not link to more information from the tracker.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>

      <div class="col-sm-3 m-b-60">
        {/* <!-- Static Process --> */}
        <div class="text-center">
          <i class="dot-line progress-bold brd-gray-light-before brd-transparent-after">
            <span class="dot-line-inner bg-grey-light brd-gray-light"></span>
          </i>
          <h3 class="h5 m-b">Step 4</h3>
          <p class="m-b-0">Instead, link to additional information in your body content or tracker caption.</p>
        </div>
        {/* <!-- End Static Process --> */}
      </div>
    </div>
    // <!-- End Static Process -->
  )
}

export default HorizontalTracker