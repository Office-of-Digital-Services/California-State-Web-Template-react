import React from 'react'

const VerticalTracker = () => {
  return (
    // <!--Experience-->
    <div className="card overflow-visible">
      {/* <!-- Panel Body --> */}
      <div className="card-block">
        <ul className="row list-unstyled">
          <li className="col-md-12">
            <article className="row">
              {/* <!-- Timeline Date --> */}
              <div className="col-md-3 text-md-end p-r-md">
                <div className="h5 m-t m-b-0">Step 1 Contributor</div>
                <div className="h6 m-y-0">YY - YY</div>
              </div>
              {/* <!-- End Timeline Date --> */}
              {/* <!-- Timeline Content --> */}
              <div className="col-md-9 pos-rel p-l-md brd-md-left brd-gray-light">
                {/* <!-- Timeline Dot --> */}
                <div className="timeline-dot d-none d-md-block">
                  <span className="dot-line-inner bg-white bg-primary-before brd-gray-light"></span>
                </div>
                {/* <!-- End Timeline Dot --> */}
                <p className="m-b-md"><br />Briefly discuss the step or identify the milestone.<br /><br /><br /></p>

              </div>
              {/* <!-- End Timeline Content --> */}
            </article>
          </li>
          <li className="col-md-12">
            <article className="row">
              {/* <!-- Timeline Date --> */}
              <div className="col-md-3  text-md-end p-r-md">
                <div className="h5 m-t m-b-0">Step 2 Contributor</div>
                <div className="h6 m-y-0">YY - YY</div>
              </div>
              {/* <!-- End Timeline Date --> */}
              {/* <!-- Timeline Content --> */}
              <div className="col-md-9 align-self-center pos-rel p-l-md brd-md-left brd-gray-light">
                {/* <!-- Timeline Dot --> */}
                <div className="timeline-dot d-none d-md-block">
                  <span className="dot-line-inner bg-white bg-primary-before brd-gray-light"></span>
                </div>
                {/* <!-- End Timeline Dot --> */}

                <p className="m-b-md"><br />Keep the message clear and concise.<br /><br /><br /></p>

              </div>
              {/* <!-- End Timeline Content --> */}
            </article>
          </li>
          <li className="col-md-12">
            <article className="row">
              {/* <!-- Timeline Date --> */}
              <div className="col-md-3 text-md-end p-r-md">
                <div className="h5 m-t m-b-0">Step 3 Contributor</div>
                <div className="h6 m-y-0">YY - YY</div>
              </div>
              {/* <!-- End Timeline Date --> */}
              {/* <!-- Timeline Content --> */}
              <div className="col-md-9 align-self-center pos-rel  p-l-md brd-md-left brd-gray-light">
                {/* <!-- Timeline Dot --> */}
                <div className="timeline-dot d-none d-md-block">
                  <span className="dot-line-inner bg-white bg-primary-before brd-gray-light"></span>
                </div>
                {/* <!-- End Timeline Dot --> */}

                <p className="m-b-md"><br />Do not link to more information from the tracker.<br /><br /><br /></p>

              </div>
              {/* <!-- End Timeline Content --> */}
            </article>
          </li>
          <li className="col-md-12">
            <article className="row">
              {/* <!-- Timeline Date --> */}
              <div className="col-md-3 text-md-end p-r-md">
                <div className="h5 m-t m-b-0">Step 4 Contributor</div>
                <div className="h6 m-y-0">YY - YY</div>
              </div>
              {/* <!-- End Timeline Date --> */}
              {/* <!-- Timeline Content --> */}
              <div className="col-md-9 align-self-center pos-rel p-l-md brd-md-left brd-gray-light">
                {/* <!-- Timeline Dot --> */}
                <div className="timeline-dot d-none d-md-block">
                  <span className="dot-line-inner bg-white bg-primary-before brd-gray-light"></span>
                </div>
                {/* <!-- End Timeline Dot --> */}
                <p className="m-b-md"><br />Instead, link to additional information in your body content or tracker caption.<br /><br /><br />
                </p>

              </div>
              {/* <!-- End Timeline Content --> */}
            </article>
          </li>
        </ul>
      </div>
      {/* <!-- End Panel Body --> */}
    </div>
    // <!--End Experience--> 
  )
}

export default VerticalTracker