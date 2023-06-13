import React from 'react';
import PropTypes from 'prop-types';
import '../../js/cagov/tabs';

const Tabs = ({ headerArr, sectionArr }) => {
  return (
    <div className='tabs'>
      <ul role={'tablist'}>
        {headerArr.map((item, idx) => <li role={'presentation'} key={`t-li-item${idx}`}><a href={`#section${idx + 1}`} role={'tab'}>{item}</a></li>)}
      </ul>
      {sectionArr.map((item, idx) => (
        <section key={`t-section-item${idx}`} id={`section${idx + 1}`} role={'tabpanel'} tabIndex={'-1'}>
          <h3 className='m-t-0'>{item.headline}</h3>
          <p>{item.text}</p>
        </section>
      ))}
    </div>
  )
}

Tabs.propTypes = {
  headerArr: PropTypes.array.isRequired,
  sectionArr: PropTypes.array.isRequired
}

export default Tabs