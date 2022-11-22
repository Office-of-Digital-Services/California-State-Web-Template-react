import React from 'react';
// import '../../js/cagov/accordion';


const BasicAccordion = ({ summaryStr, contentArr }) => {
  return (
    <cagov-accordion>
      <details style={{ height: '2px' }}>
        <summary>
          {summaryStr}
          <div className={'cagov-open-indicator'} aria-hidden={'true'}></div>
        </summary>
        <div className={'accordion-body'}>
          {contentArr.map((body, idx) => <p key={`ba-body-item${idx}`}>{body}</p>)}
        </div>
      </details>
    </cagov-accordion>
  )
}

export default BasicAccordion