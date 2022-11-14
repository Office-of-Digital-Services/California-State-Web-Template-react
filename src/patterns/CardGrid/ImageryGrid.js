import React from 'react';
import Image1 from './sunflower1.jpg';
import Image2 from './sunflower2.jpg';
import Image3 from './sunflower3.jpg';


const ImageryGrid = () => {
  return (
    <>
      <h3 class="m-t-0">Graphics</h3>
      <div class="row">
        <div class="col-md-4">
          {/* <!-- Icon Block --> */}
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div class="text-center  p-b">
              <span class="ca-gov-icon-clipboard color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Infographic</a>
              <p class="color-gray-dark text-left">Commonly recognized by visitors and generally reserved for data-rich
                visualization.</p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
        <div class="col-md-4">
          {/* <!-- Icon Block --> */}
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div class="text-center  p-b">
              <span class="ca-gov-icon-accessibility color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Icons</a>
              <p class="color-gray-dark text-left">Should be simple and maintain the likeness of the object it represents.
                samples</p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
        <div class="col-md-4">
          {/* <!-- Icon Block --> */}
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div class="text-center  p-b">
              <span class="ca-gov-icon-calendar color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card body</a>
              <p class="color-gray-dark text-left">This space should quickly describe what visitors will find at the button link.
              </p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
      </div>

      <h3>Images</h3>
      <div class="row">
        <div class="col-md-4">
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel p-b">
            <img class="img-fluid rounded-4" src={Image1} alt="Image description 1" />
            <div class="p-a-md">
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p class="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel  p-b">
            <img class="img-fluid rounded-4" src={Image2} alt="Image description 2" />
            <div class="p-a-md">
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p class="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
        <div class="col-md-4">
          <article class="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel  p-b">
            <img class="img-fluid rounded-4" src={Image3} alt="Image description 3" />
            <div class="p-a-md">
              <a href="#" class="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p class="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default ImageryGrid