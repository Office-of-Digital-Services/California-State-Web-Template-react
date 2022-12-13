import React from 'react'

const Blockquote = ({ withGraphic = true, withPulledQuote = false, isProminent = false, quote, author, imageSrc, altText }) => {

  const buildClassName = (addGraphic, addPulledQuote, addProminent) => {
    let str = '';
    if (!addGraphic) {
      str += 'no-quotation-mark ';
    }
    if (addPulledQuote) {
      str += 'pull-quote ';
    }
    if (addProminent) {
      str += 'prominent';
    }
    return str;
  }

  const content = imageSrc ? (
    <div className={'row'}>
      <div className={'col-md-4 text-right p-r-md p-t-sm'}>
        <img src={imageSrc} className={'img-fluid img-circle height-150'} alt={altText} />
      </div>
      <div className={'col-md-8'}>
        <blockquote className={buildClassName(withGraphic, withPulledQuote, isProminent)}>
          <p>{quote}</p>
          <footer>{author}</footer>
        </blockquote>
      </div>
    </div>
  ) :
    (
      <blockquote className={buildClassName(withGraphic, withPulledQuote, isProminent)}>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
    )

  return content;
}

export default Blockquote