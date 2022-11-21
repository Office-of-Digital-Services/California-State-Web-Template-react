import React from 'react'

const AccordionList = ({ contentArr }) => {
  return (
    <ol data-aria-accordion={''} data-multi={''} data-transition={''} data-default={'none'} id={'acc_1-1'} className={'accordion'}>
      {contentArr.map((item, idx) => {
        return (
          <li key={`al-list-item${idx}`}>
            <h3 data-aria-accordion-heading={''} className={'accordion__heading'}>
              <button type={'button'} aria-controls={`acc_1-1_panel_${idx + 1}`} id={`acc_1-1_panel_${idx + 1}_trigger`} className={'accordion__trigger'} aria-expanded={'false'} data-current={'false'}>
                {item.heading}
              </button>
            </h3>
            <div data-aria-accordion-panel={''} className={'accordion__panel--transition accordion__panel'} id={`acc_1-1_panel_${idx + 1}`} aria-hidden={'true'}>
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