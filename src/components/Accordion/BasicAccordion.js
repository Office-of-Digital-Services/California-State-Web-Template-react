import React from 'react';

const BasicAccordion = ({ summaryStr, contentArr }) => {
  return (
    <cagov-accordion>
      <details>
        <summary>
          {summaryStr}
        </summary>
        <div className={'accordion-body'}>
          {contentArr.map((body, idx) => <p key={`ba-body-item${idx}`}>{body}</p>)}
        </div>
      </details>
    </cagov-accordion>
  )
}

export default BasicAccordion