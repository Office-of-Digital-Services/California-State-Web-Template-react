import React from 'react';

const AccordionList = ({ contentArr }) => {
  return (
    <ol data-aria-accordion data-multi data-transition data-default={'none'}>
      {contentArr.map((item, idx) => {
        return (
          <li key={`al-list-item${idx}`}>
            <h3 data-aria-accordion-heading>{item.heading}</h3>
            <div data-aria-accordion-panel>
              <p>
                {item.content}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default AccordionList