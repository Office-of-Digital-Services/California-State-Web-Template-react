import React from 'react';
import PropTypes from 'prop-types';

const Lists = ({ type, itemsArr }) => (
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