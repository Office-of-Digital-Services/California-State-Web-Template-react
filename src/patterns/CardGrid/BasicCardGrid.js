import React from 'react';

const BasicCardGrid = () => {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body bg-gray-50'>
            <h3 className='h4 m-y-sm'>Card title</h3>
            <p className='m-b'>Use the content found at the button link to inspire your card title.</p>
            <a className='btn btn-primary p-x-md' href='#'>Button <span className='sr-only'>with link related to card title</span></a>
          </div>
        </div>


      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body bg-gray-50'>
            <h3 className='h4 m-y-sm'>Title</h3>
            <p className='m-b'>Cards use the <a href='/visual-design/typography.html'>heading</a> text style for titles. Keep them
              short, concise, and consistent.</p>
            <a className='btn btn-primary p-x-md' href='#'>Button <span className='sr-only'>with some link</span></a>
          </div>
        </div>

      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body bg-gray-50'>
            <h3 className='h4 m-y-sm'>Card body</h3>
            <p className='m-b'>Use this space to briefly tell your reader what they will find at the card's destination.</p>
            <a className='btn btn-primary p-x-md' href='#'>Button <span className='sr-only'>with link that goes somewhere</span></a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default BasicCardGrid