import React from 'react';
import Image1 from './sunflower1.jpg';
import Image2 from './sunflower2.jpg';
import Image3 from './sunflower3.jpg';


const ImageryGrid = () => {
  return (
    <>
      <h3 className="m-t-0">Graphics</h3>
      <div className="row">
        <div className="col-md-4">
          {/* <!-- Icon Block --> */}
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div className="text-center  p-b">
              <span className="ca-gov-icon-clipboard color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Infographic</a>
              <p className="color-gray-dark text-left">Commonly recognized by visitors and generally reserved for data-rich
                visualization.</p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
        <div className="col-md-4">
          {/* <!-- Icon Block --> */}
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div className="text-center  p-b">
              <span className="ca-gov-icon-accessibility color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Icons</a>
              <p className="color-gray-dark text-left">Should be simple and maintain the likeness of the object it represents.
                samples</p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
        <div className="col-md-4">
          {/* <!-- Icon Block --> */}
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel">
            <div className="text-center  p-b">
              <span className="ca-gov-icon-calendar color-p2 color-p2-hover text-huge d-block" aria-hidden="true"></span>
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card body</a>
              <p className="color-gray-dark text-left">This space should quickly describe what visitors will find at the button link.
              </p>
            </div>
          </article>
          {/* <!-- End Icon Block --> */}
        </div>
      </div>

      <h3>Images</h3>
      <div className="row">
        <div className="col-md-4">
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel p-b">
            <img className="img-fluid rounded-4" src={Image1} alt="Image description 1" />
            <div className="p-a-md">
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p className="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel  p-b">
            <img className="img-fluid rounded-4" src={Image2} alt="Image description 2" />
            <div className="p-a-md">
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p className="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
        <div className="col-md-4">
          <article className="no-underline d-block bg-gray-50 bg-grey-lightest-hover pos-rel  p-b">
            <img className="img-fluid rounded-4" src={Image3} alt="Image description 3" />
            <div className="p-a-md">
              <a href="#" className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">Card title</a>
              <p className="color-gray-dark text-left">Briefly tell your reader what they will find at the card's destination then
                link to that location. </p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default ImageryGrid