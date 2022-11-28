import React from 'react';
import '../../js/cagov/number-counter';

const NumberCounter = ({ countTime = '4000', targetNumber }) => {
  return (
    <div className={'stat-counter text-accent1'}>
      <span className={'scroll-counter'} data-counter-time={countTime} style={{ visibility: 'visible' }}>{targetNumber}</span>
    </div>
  )
}

export default NumberCounter