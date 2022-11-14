import React from 'react'

const Button = ({ href, buttonSize, buttonType, buttonText, disabled }) => {
  return (
    <>
      {
        href ?
          <a href={href} className={`btn btn-${buttonType} ${disabled ? 'disabled' : null} ${buttonSize ? `btn-${buttonSize}` : null} `} role={'button'}>{buttonText}</a> :
          <button className={`btn btn-${buttonType} ${disabled ? 'disabled' : null} ${buttonSize ? `btn-${buttonSize}` : null} `}>{buttonText}</button>
      }
    </>
  )
}

export default Button