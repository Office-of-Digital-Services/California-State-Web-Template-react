import React from 'react'

const OrderedList = ({ itemsArr }) => {
  return (
    <ol>
      {itemsArr.map((item, idx) => <li key={`ol-list-item${idx}`}>{item}</li>)}
    </ol>
  )
}

export default OrderedList