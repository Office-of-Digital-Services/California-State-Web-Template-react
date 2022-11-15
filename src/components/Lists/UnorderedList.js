import React from 'react'

const UnorderedList = ({ itemsArr }) => {
  return (
    <ul>
      {itemsArr.map((item, idx) => <li key={`ul-list-item${idx}`}>{item}</li>)}
    </ul>
  )
}

export default UnorderedList