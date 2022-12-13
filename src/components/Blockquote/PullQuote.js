import React from 'react'

const PullQuote = ({ quoteStr, footerStr }) => {
  return (
    <blockquote className={'pull-quote'}>
      <p>{quoteStr}</p>
      <footer>{footerStr}</footer>
    </blockquote>
  )
}

export default PullQuote