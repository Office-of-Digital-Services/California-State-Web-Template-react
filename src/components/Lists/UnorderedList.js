import React from 'react'

const UnorderedList = ({ itemsArr }) => {
  return (
    <ul>
      {itemsArr.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default UnorderedList