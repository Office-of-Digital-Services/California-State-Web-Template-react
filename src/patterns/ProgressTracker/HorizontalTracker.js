import React from 'react'

const HorizontalTracker = ({ contentArr, currentStep }) => {

  const setClass = (index) => {
    // Can probably be refactored :)
    if (index === 0 && currentStep !== contentArr.length && currentStep !== 1) {
      index = 'otherstart';
    }
    if (index === currentStep - 1 && currentStep !== contentArr.length && currentStep === 1) {
      index = 'start';
    }
    if (index === currentStep - 1 && currentStep !== contentArr.length) {
      index = 'current';
    }
    if (index === contentArr.length - 1 && currentStep !== contentArr.length) {
      index = 'end';
    }
    if (index === contentArr.length - 1 && currentStep === contentArr.length) {
      index = 'complete';
    }
    if (index >= currentStep - 1) {
      index = 'incomplete';
    }

    switch (index) {
      case 'otherstart':
        return 'brd-transparent-before brd-primary-light-after'
      case 'start':
        return 'brd-transparent-before brd-gray-light-after';
      case 'current':
        return 'brd-primary-light-before brd-gray-light-after';
      case 'incomplete':
        return 'brd-gray-light-before brd-gray-light-after';
      case 'end':
        return 'brd-gray-light-before brd-transparent-after';
      case 'complete':
        return 'brd-primary-light-before brd-transparent-after';
      default:
        return 'brd-primary-light-before brd-primary-light-after';
    }
  }

  const setColNumber = () => {
    return `col-sm-${Math.round(12 / contentArr.length)}`
  }

  return (
    <div className="row">
      {contentArr.map((item, idx) => (
        <div className={`${setColNumber()} m-b-60`} key={`ht-div-item${idx}`}>
          <div className="text-center">
            <i className={`dot-line progress-bold ${setClass(idx)} `}>
              <span className={`dot-line-inner ${idx >= currentStep ? 'bg-grey-light brd-gray-light' : 'bg-primary-light bg-primary-before brd-primary-light'}`}></span>
            </i>
            <h3 className="h5 m-b">{item.title}</h3>
            <p className="m-b-0">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HorizontalTracker