import React from 'react'

const Lists = ({ type, itemsArr }) => (
  type === 'ordered' ? (<ol>
    {itemsArr.map((item, idx) => <li key={`ol-list-item${idx}`}>{item}</li>)}
  </ol>) : (<ul>
    {itemsArr.map((item, idx) => <li key={`ul-list-item${idx}`}>{item}</li>)}
  </ul>)
)

export default Lists