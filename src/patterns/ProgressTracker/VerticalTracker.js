import React from 'react'

const VerticalTracker = ({ contentArr }) => {
  return (
    // <!--Experience-->
    <div className="card overflow-visible">
      {/* <!-- Panel Body --> */}
      <div className="card-block">
        <ul className="row list-unstyled">
          {contentArr.map((item, idx) => (
            <li className="col-md-12" key={`vt-list-item${idx}`}>
              <article className="row">
                {/* <!-- Timeline Date --> */}
                <div className="col-md-3 text-md-end p-r-md">
                  <div className="h5 m-t m-b-0">{item.title}</div>
                  <div className="h6 m-y-0">{item.date}</div>
                </div>
                {/* <!-- End Timeline Date --> */}
                {/* <!-- Timeline Content --> */}
                <div className="col-md-9 pos-rel p-l-md brd-md-left brd-gray-light">
                  {/* <!-- Timeline Dot --> */}
                  <div className="timeline-dot d-none d-md-block">
                    <span className="dot-line-inner bg-white bg-primary-before brd-gray-light"></span>
                  </div>
                  {/* <!-- End Timeline Dot --> */}
                  <p className="m-b-md"><br />{item.body}<br /><br /><br /></p>
                </div>
                {/* <!-- End Timeline Content --> */}
              </article>
            </li>
          ))}
        </ul>
      </div>
      {/* <!-- End Panel Body --> */}
    </div>
    // <!--End Experience--> 
  )
}

export default VerticalTracker