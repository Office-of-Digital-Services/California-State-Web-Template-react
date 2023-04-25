import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Generates ordered or unordered list from array of items.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#lists
 * 
 * @example
 * <Lists
     itemsArr=
       {
         [
           'List step 1 of your process.',
           'List the second step of your process.',
           'List the third step of your process.'
         ]
       }
     type={'ordered'}
   />
 * 
 * @param {array} itemsArr - Each array index generates a list item from that index's value.
 * @param {string} [type='default'] - Pass in 'ordered' to generate an ordered list.
 * 
 * @returns {React.ReactElement} returns Lists component.
 */

const Lists = ({ itemsArr, type = 'default' }) => (
  type === 'ordered' ? (<ol>
    {itemsArr.map((item, idx) => <li key={`ol-list-item${idx}`}>{item}</li>)}
  </ol>) : (<ul>
    {itemsArr.map((item, idx) => <li key={`ul-list-item${idx}`}>{item}</li>)}
  </ul>)
)

Lists.propTypes = {
  itemsArr: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default Lists