import React from 'react';

const MultiLevelList = ({ contentArr }) => {

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
    <nav aria-label={'list navigation'} className={'side-navigation'}>
      <ul className="list-navigation">

        {contentArr.map((item, idx) => (
          <li key={`sn-list-item${idx}`}>
            <a href={item.href} className={setClass(item)}>{item.text}</a>

            {item.secondLevelArr ?
              <ul>
                {item.secondLevelArr.map((secondLevelItem, secondLevelIdx) => (
                  <li key={`sn-list-second-level-item${secondLevelIdx}`}>
                    <a href={secondLevelItem.href} className={secondLevelItem.isLanding ?
                      `${setClass(secondLevelItem)} back` :
                      setClass(secondLevelItem)}>{secondLevelItem.text}</a>
                    {secondLevelItem.thirdLevelArr ?
                      <ul>
                        {secondLevelItem.thirdLevelArr.map((thirdLevelItem, thirdIdx) => (
                          <li key={`sn-list-third-level-item${thirdIdx}`}>
                            <a href={thirdLevelItem.href} className={setClass(thirdLevelItem)}>{thirdLevelItem.text}</a>
                          </li>
                        ))}
                      </ul> :
                      null
                    }
                  </li>
                ))}
              </ul> :
              null
            }

          </li>
        ))}

      </ul>
    </nav>
  )
}

export default MultiLevelList