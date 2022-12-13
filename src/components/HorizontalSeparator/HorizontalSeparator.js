import React from 'react'

const HorizontalSeparator = ({ isDotted }) => {
  return (
    <hr className={isDotted ? 'hr-understated' : ''} />
  )
}

export default HorizontalSeparator