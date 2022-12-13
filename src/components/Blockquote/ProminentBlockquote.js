import React from 'react'

const ProminentBlockquote = ({ quoteStr, footerStr }) => {
  return (
    <blockquote className={'prominent'}>
      <p>{quoteStr}</p>
      <footer>{footerStr}</footer>
    </blockquote>
  )
}

export default ProminentBlockquote