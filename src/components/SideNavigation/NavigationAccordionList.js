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
      <div className="sr-only" id="components-list">Accordion side navigation</div>
      {contentArr.map((item, idx) => (
        item.secondLevelArr ?
          <cagov-accordion className="sidenav" key={`nal-accordion${idx}`}>
            <details open={item.isOpen}>
              <summary className="active">{item.text}</summary>
              <div className="accordion-body">
                <ul className="side-subnav">
                  {item.secondLevelArr.map((secondLevelItem, secondLevelIdx) => (
                    <li key={`nal-li-item${secondLevelIdx}`}>
                      <a href={secondLevelItem.href}>{secondLevelItem.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </cagov-accordion> :
          <a className={`sidenav ${setClass(item)}`} href={item.href} key={`nal-anchor${idx}`}>{item.text}</a>
      ))}
    </nav>
  )
}

export default NavigationAccordionList