import React from 'react'

const TextAccentColors = ({ htmlTag, accentClass, text }) => {
  const content = htmlTag === 'p' ?
    <p className={accentClass}>{text}</p> :
    <span className={accentClass}>{text}</span>
  return content;
}

export default TextAccentColors