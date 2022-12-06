import React from 'react';

const NavigationDropdownMenu = ({ contentArr }) => {

  const handleToggle = (e) => {
    const id = e.target.getAttribute('aria-controls');
    const isOpen = e.target.getAttribute('aria-expanded');

    if (isOpen === 'false') {
      e.target.setAttribute('aria-expanded', true);
      document.getElementById(id).setAttribute('aria-hidden', false);
    } else {
      e.target.setAttribute('aria-expanded', false);
      document.getElementById(id).setAttribute('aria-hidden', true);
    }

    document.getElementById(id).classList.toggle('open');
  }

  return (
    <nav id="navigation" className="main-navigation dropdown nav" data-multiselectable={false} data-nav-id={'navdropdownmenu-nav-id'}>
      <ul id="nav_list" className="top-level-nav">

        {contentArr.map((item, idx) => (
          <li className="nav-item" key={`ndm-list-item${idx}`}>
            <div className={'has-sub-btn'}>
              <button onClick={handleToggle} id={`navheader_tab${idx}`} className={'first-level-btn nav-header has-sub'} aria-expanded={false} aria-controls={`navheader_panel${idx}`} data-nav-id={'navdropdownmenu-nav-id'}>
                {item.navHeader}
              </button>
            </div>

            <div className="sub-nav" id={`navheader_panel${idx}`} role={'tabpanel'} aria-labelledby={`navheader_tab${idx}`} data-nav-id={'navdropdownmenu-nav-id'} aria-hidden={true}>
              <ul className="second-level-nav">
                {item.navBodyArr.map((navItem, navIdx) => (
                  <li className="unit1" key={`ndm-nav-list-item${navIdx}`}>
                    <a href={navItem.href} className="second-level-link" tabIndex={-1}>{navItem.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default NavigationDropdownMenu