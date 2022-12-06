import React from 'react';

const Megamenu = ({ contentArr }) => {

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
    <nav id="navigation" className="main-navigation megadropdown auto-highlight" data-multiselectable={false} data-nav-id={'navmegamenu-nav-id'}>
      <ul id="nav_list" className="top-level-nav">

        {contentArr.map((item, idx) => (

          <li className="nav-item" key={`mm-nav-item${idx}`}>
            <div className={'has-sub-btn'}>
              <button onClick={handleToggle} id={`megamenuheader_tab${idx}`} className={'first-level-btn nav-header has-sub'} aria-expanded={false} aria-controls={`megamenuheader_panel${idx}`} data-nav-id={'navmegamenu-nav-id'}>
                {item.navHeader}
              </button>
            </div>

            <div className="sub-nav" id={`megamenuheader_panel${idx}`} role={'tabpanel'} aria-labelledby={`megamenuheader_tab${idx}`} data-nav-id={'navmegamenu-nav-id'} aria-hidden={true}>

              {item.hasBorder ?
                <div className="second-level-nav flex with-border">
                  {item.navBodyArr.map((navItem, navIdx) => (
                    <a href={navItem.href} className="second-level-link" key={`mm-nav-item${navIdx}`}>
                      <span className={navItem.icon} aria-hidden="true"></span>{navItem.title}
                      <div className="link-description">{navItem.body}</div>
                    </a>
                  ))}
                </div>
                :
                <div className="second-level-nav flex">
                  {item.navBodyArr.map((navItem, navIdx) => (
                    <a href={navItem.href} className="second-level-link" key={`mm-nav-item${navIdx}`}>
                      <span className={`${navItem.icon} font-size-40`} aria-hidden="false"></span>
                      <p className="h3 sub-nav-link">{navItem.title}</p>
                      <p className="link-description">{navItem.body}</p>
                    </a>
                  ))}
                </div>
              }
            </div>
          </li>
        ))}

      </ul>
    </nav>
  )
}

export default Megamenu