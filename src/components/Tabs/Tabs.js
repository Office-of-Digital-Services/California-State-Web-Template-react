import React from 'react'

const Tabs = () => {
  return (
    <div className='tabs'>
      <ul>
        <li>
          <a href='#section1'>Tab 1</a>
        </li>
        <li>
          <a href='#section2'>Tab 2</a>
        </li>
        <li>
          <a href='#section3'>Tab 3</a>
        </li>
        <li>
          <a href='#section4'>Tab 4</a>
        </li>
      </ul>
      <section id='section1'>
        <h3 className='m-t-0'>Tab 1 headline</h3>
        <p>This is tab 1 body text.</p>
      </section>
      <section id='section2'>
        <h3 className='m-t-0'>Tab 2 headline</h3>
        <p>This is tab 2 body text.</p>
      </section>
      <section id='section3'>
        <h3 className='m-t-0'>Tab 3 headline</h3>
        <p>This is tab 3 body text.</p>
      </section>
      <section id='section4'>
        <h3 className='m-t-0'>Tab 4 headline</h3>
        <p>This is tab 3 body text.</p>
      </section>
    </div>
  )
}

export default Tabs