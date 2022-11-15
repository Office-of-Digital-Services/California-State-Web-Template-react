import React from 'react';
import '../../js/cagov/tabs';

const Tabs = () => {
  return (
    <div className='tabs'>
      <ul role={'tablist'}>
        <li role={'presentation'}>
          <a href='#section1' role={'tab'}>Tab 1</a>
        </li>
        <li role={'presentation'}>
          <a href='#section2' role={'tab'}>Tab 2</a>
        </li>
        <li role={'presentation'}>
          <a href='#section3' role={'tab'}>Tab 3</a>
        </li>
        <li role={'presentation'}>
          <a href='#section4' role={'tab'}>Tab 4</a>
        </li>
      </ul>
      <section id='section1' role={'tabpanel'} tabIndex={'-1'}>
        <h3 className='m-t-0'>Tab 1 headline</h3>
        <p>This is tab 1 body text.</p>
      </section>
      <section id='section2' role={'tabpanel'} tabIndex={'-1'}>
        <h3 className='m-t-0'>Tab 2 headline</h3>
        <p>This is tab 2 body text.</p>
      </section>
      <section id='section3' role={'tabpanel'} tabIndex={'-1'}>
        <h3 className='m-t-0'>Tab 3 headline</h3>
        <p>This is tab 3 body text.</p>
      </section>
      <section id='section4' role={'tabpanel'} tabIndex={'-1'}>
        <h3 className='m-t-0'>Tab 4 headline</h3>
        <p>This is tab 4 body text.</p>
      </section>
    </div>
  )
}

export default Tabs