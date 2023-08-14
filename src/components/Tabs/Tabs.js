import React from 'react';
import PropTypes from 'prop-types';
import '../../js/cagov/tabs';

/**
 * @summary Generate tabs containing a header, subheader, and body text.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#tabs
 * 
 * @example
 * <Tabs
     headerArr={['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']}
     sectionArr={
       [
         { headline: 'Tab 1 headline', text: 'Tab 1 text' },
         { headline: 'Tab 2 headline', text: 'Tab 2 text' },
         { headline: 'Tab 3 headline', text: 'Tab 3 text' },
         { headline: 'Tab 4 headline', text: 'Tab 4 text' }
       ]
     }
   />
 * 
 * @param {string[]} headerArr - Each array index generates a Tab header containing the index value.
 * @param {object[]} sectionArr - An array of objects {string:headline, string:text}.
 * @param {string} sectionArr.headline - Sets Tab content headline.
 * @param {string} sectionArr.text = Sets Tab content body text.
 * 
 * @returns {React.ReactElement} Returns the Tabs component.
 */

const Tabs = ({ headerArr, sectionArr }) => {
  return (
    <div className='tabs'>
      <ul>
        {headerArr.map((item, idx) => <li key={`t-li-item${idx}`}><a href={`#section${idx + 1}`} role={'tab'}>{item}</a></li>)}
      </ul>
      {sectionArr.map((item, idx) => (
        <section key={`t-section-item${idx}`} id={`section${idx + 1}`}>
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