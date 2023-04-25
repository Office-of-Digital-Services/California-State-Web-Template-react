import React from 'react';
import PropTypes from 'prop-types';
import '../../js/cagov/number-counter';

/**
 * @summary Number counter with animation.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#number-counter
 * 
 * @example
 * <NumberCounter
     countTime={'5000'}
     targetNumber={300}
   />
 * 
 * @param {string} [countTime='4000'] - Sets the duration needed to reach target number.
 * @param {number} targetNumber - Sets the target number that the NumberCounter stops at.
 * @returns {React.ReactElement} returns NumberCounter component.
 */

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