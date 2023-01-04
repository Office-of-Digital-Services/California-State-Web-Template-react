import React from 'react';
import PropTypes from 'prop-types';
import '../../js/cagov/number-counter';

const NumberCounter = ({ countTime = '4000', targetNumber }) => {
  return (
    <div className={'stat-counter text-accent1'}>
      <span className={'scroll-counter'} data-counter-time={countTime} style={{ visibility: 'visible' }}>{targetNumber}</span>
    </div>
  )
}

NumberCounter.propTypes = {
  countTime: PropTypes.string,
  targetNumber: PropTypes.number.isRequired
}

export default NumberCounter