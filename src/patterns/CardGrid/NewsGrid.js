import React from 'react';
import Image1 from './news-grid1.jpg';
import Image2 from './news-grid2.jpg';
import Image3 from './news-grid3.jpg';

const NewsGrid = () => {
  return (
    <div className="row">
      <div className="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article className="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure className="pos-rel m-b-0">
            <img className="img-fluid w-100" src={Image1} alt="Image Description" />
            <figcaption className="pos-abs top-sm p-l-0 rounded-3">
              <span className="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div className="p-a">
            <ul className="list-inline small m-y-0">
              <li className="list-inline-item">
                <span className="color-gray">By:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li className="list-inline-item">
                <span className="color-gray">In:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 className="h4 m-t-0 m-b-sm">
              <a className="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title</a>
            </h3>

            <p>Briefly tell your reader what they will find at the card's destination then link to the official news release or
              news section within your site.</p>
          </div>
        </article>
        {/* <!-- End Article --> */}
      </div>

      <div className="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article className="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure className="pos-rel m-b-0">
            <img className="img-fluid w-100" src={Image2} alt="Image description #2" />
            <figcaption className="pos-abs top-sm p-l-0 rounded-3">
              <span className="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div className="p-a">
            <ul className="list-inline small m-y-0">
              <li className="list-inline-item">
                <span className="color-gray">By:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li className="list-inline-item">
                <span className="color-gray">In:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 className="h4 m-t-0 m-b-sm">
              <a className="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title <span className="sr-only">#2</span></a>
            </h3>

            <p>Briefly tell your reader what they will find at the card's destination then link to the official news release or
              news section within your site.</p>
          </div>
        </article>
        {/* <!-- End Article --> */}
      </div>

      <div className="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article className="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure className="pos-rel m-b-0">
            <img className="img-fluid w-100" src={Image3} alt="Image description #3" />
            <figcaption className="pos-abs top-sm p-l-0 rounded-3">
              <span className="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div className="p-a">
            <ul className="list-inline small m-y-0">
              <li className="list-inline-item">
                <span className="color-gray">By:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li className="list-inline-item">
                <span className="color-gray">In:</span>
                <span className="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 className="h4 m-t-0 m-b-sm">
              <a className="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title <span className="sr-only">#3</span></a>
            </h3>

            <p>Briefly tell your reader what they will find at the card's destination then link to the official news release or
              news section within your site.</p>
          </div>
        </article>
        {/* <!-- End Article --> */}
      </div>
    </div>
  )
}

export default NewsGrid