import React from 'react';
import Image1 from './sunflower1.jpg';
import Image2 from './sunflower2.jpg';
import Image3 from './sunflower3.jpg';


const ImageryGrid = () => {
  return (
    <>
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