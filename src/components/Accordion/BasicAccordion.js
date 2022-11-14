import React from 'react'

const BasicAccordion = ({ summaryStr, bodyArr }) => {
  return (
    <cagov-accordion>
      <details style={{ height: '2px' }}>
        <summary>
          {summaryStr}
          <div className={'cagov-open-indicator'} aria-hidden={'true'}></div>
        </summary>
        <div className={'accordion-body'}>
          {bodyArr.map((body, idx) => <p key={`ba-body-item${idx}`}>{body}</p>)}
        </div>
      </details>
    </cagov-accordion>
  )
}

export default BasicAccordion