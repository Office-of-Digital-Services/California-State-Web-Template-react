import React from 'react'

const BasicBlockquote = ({ withGraphic = true }) => {
  return (
    <blockquote className={withGraphic ? null : 'no-quotation-mark'}>
      <p>Good quotes help to tell a story and enhance the credibility of a press release, news story, or speech. Words that
        are crafted well can leave a lasting impact on the world. </p>
      <footer>Holly Zuluaga</footer>
    </blockquote>
  )
}

export default BasicBlockquote