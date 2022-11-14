import React from 'react';

const BlockquoteWithImage = ({ imageSrc, altStr, quoteStr, footerStr, withGraphic = true }) => {
  return (
    <div className={'row'}>
      <div className={'col-md-4 text-right p-r-md p-t-sm'}>
        <img src={imageSrc} className={'img-fluid img-circle height-150'} alt={altStr} />
      </div>
      <div className={'col-md-8'}>
        <blockquote className={withGraphic ? null : 'no-quotation-mark'}>
          <p>{quoteStr}</p>
          <footer>{footerStr}</footer>
        </blockquote>
      </div>
    </div>
  )
}

export default BlockquoteWithImage