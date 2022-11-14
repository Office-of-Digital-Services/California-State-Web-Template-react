import React from 'react'

const Breadcrumb = ({ breadcrumbArr, currentPage }) => {
  return (
    <nav aria-label={'You are here'}>
      <ol className={'breadcrumb'}>
        {breadcrumbArr.map((item, idx) => {
          return (
            <li key={`bc-list-item${idx}`}>
              <a href={item.href} title={item.title}>{item.title}</a>
            </li>
          )
        })}
        <li className={'active'}>{currentPage}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumb