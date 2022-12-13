import React from 'react'

const StepList = ({ contentArr }) => {
  return (
    <ol className="cagov-step-list">
      {contentArr.map((item, idx) => (
        <li key={`sl-list-item${idx}`}>
          <strong>{item.title}</strong>
          <br />
          <span className="cagov-step-list-content">
            {item.body}
          </span>
        </li>
      ))}
    </ol>
  )
}

export default StepList