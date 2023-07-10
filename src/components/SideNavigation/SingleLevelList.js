import React from 'react'

const SingleLevelList = ({ contentArr }) => {

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
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SingleLevelList