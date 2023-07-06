import React from 'react';

const NavigationDropdownMenu = ({ contentArr }) => (
  <nav id={'navigation'} className={'main-navigation dropdown'}>
    <ul id={'nav_list'} className={'top-level-nav'}>

      {contentArr.map((item, idx) => (
        <li className={'nav-item'} key={`ndm-list-item${idx}`} role={'presentation'}>

          {item.href ?
            <a className={'first-level-link'} href={item.href}>{item.navHeader}</a> :
            <>
              <a href={'/'} className={'second-level-link'}>{item.navHeader}</a>
              <div className={'sub-nav'}>
                <ul className={'second-level-nav'}>
                  {item.navBodyArr.map((navItem, navIdx) => (
                    <li className={'unit1'} key={`ndm-nav-list-item${navIdx}`}>
                      <a href={navItem.href} className={'second-level-link'}>{navItem.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          }

        </li>
      ))}
    </ul>
  </nav>
)

export default NavigationDropdownMenu