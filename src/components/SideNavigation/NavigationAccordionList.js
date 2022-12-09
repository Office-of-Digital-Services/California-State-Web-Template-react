import React from 'react'

const NavigationAccordionList = ({ contentArr }) => {

  const setClass = (item) => {
    let className = '';
    if (item.isActive) {
      className += 'active';
    }
    if (item.isLanding) {
      className += ' landing';
    }

    return className
  }

  return (
    <nav aria-labelledby="components-list">
      <div class="sr-only" id="components-list">Accordion side navigation</div>
      {contentArr.map((item, idx) => (
        item.secondLevelArr ?
          <cagov-accordion class="sidenav">
            <details open={item.isOpen}>
              <summary class="active">{item.text}</summary>
              <div class="accordion-body">
                <ul class="side-subnav">
                  {item.secondLevelArr.map((secondLevelItem, secondLevelIdx) => (
                    <li>
                      <a href={secondLevelItem.href}>{secondLevelItem.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </cagov-accordion> :
          <a className={`sidenav ${setClass(item)}`} href={item.href}>{item.text}</a>
      ))}
    </nav>
  )
}

export default NavigationAccordionList