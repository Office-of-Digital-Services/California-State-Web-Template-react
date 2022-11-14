import React from 'react'

const OrderedList = ({ itemsArr }) => {
  return (
    <ol>
      {itemsArr.map(item => <li>{item}</li>)}
    </ol>
  )
}

export default OrderedList