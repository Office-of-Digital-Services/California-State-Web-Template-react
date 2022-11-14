import React from 'react'

const NumberCounter = ({ countTimeInMs = '4000', targetNumber }) => {
  return (
    <div className={'stat-counter text-accent1'}>
      <span className={'scroll-counter'} data-counter-time={countTimeInMs} style={{ visibility: 'visible' }}>{targetNumber}</span>
    </div>
  )
}

export default NumberCounter