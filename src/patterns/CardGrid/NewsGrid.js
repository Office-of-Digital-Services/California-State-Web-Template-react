import React from 'react';
import Image1 from './news-grid1.jpg';
import Image2 from './news-grid2.jpg';
import Image3 from './news-grid3.jpg';

const NewsGrid = () => {
  return (
    <div class="row">
      <div class="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article class="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure class="pos-rel m-b-0">
            <img class="img-fluid w-100" src={Image1} alt="Image Description" />
            <figcaption class="pos-abs top-sm p-l-0 rounded-3">
              <span class="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div class="p-a">
            <ul class="list-inline small m-y-0">
              <li class="list-inline-item">
                <span class="color-gray">By:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li class="list-inline-item">
                <span class="color-gray">In:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 class="h4 m-t-0 m-b-sm">
              <a class="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title</a>
            </h3>

            <p>Briefly tell your reader what they will find at the card's destination then link to the official news release or
              news section within your site.</p>
          </div>
        </article>
        {/* <!-- End Article --> */}
      </div>

      <div class="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article class="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure class="pos-rel m-b-0">
            <img class="img-fluid w-100" src={Image2} alt="Image description #2" />
            <figcaption class="pos-abs top-sm p-l-0 rounded-3">
              <span class="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div class="p-a">
            <ul class="list-inline small m-y-0">
              <li class="list-inline-item">
                <span class="color-gray">By:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li class="list-inline-item">
                <span class="color-gray">In:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 class="h4 m-t-0 m-b-sm">
              <a class="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title <span class="sr-only">#2</span></a>
            </h3>

            <p>Briefly tell your reader what they will find at the card's destination then link to the official news release or
              news section within your site.</p>
          </div>
        </article>
        {/* <!-- End Article --> */}
      </div>

      <div class="col-md-4 m-b-md">
        {/* <!-- Article --> */}
        <article class="bg-gray-50-hover p-b-md brd-solid-1 brd-gray-light pos-rel">
          <figure class="pos-rel m-b-0">
            <img class="img-fluid w-100" src={Image3} alt="Image description #3" />
            <figcaption class="pos-abs top-sm p-l-0 rounded-3">
              <span class="btn btn-sm btn-standout rounded-0" href="#">Month DD, YYYY</span>
            </figcaption>
          </figure>

          <div class="p-a">
            <ul class="list-inline small m-y-0">
              <li class="list-inline-item">
                <span class="color-gray">By:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Author</span>
              </li>
              <li class="list-inline-item">
                <span class="color-gray">In:</span>
                <span class="color-gray-dark color-primary-hover" href="#">Agency</span>
              </li>
            </ul>

            <h3 class="h4 m-t-0 m-b-sm">
              <a class="u-link-v5 color-gray-dark color-primary-hover link-before no-underline" href="#">Short title <span class="sr-only">#3</span></a>
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