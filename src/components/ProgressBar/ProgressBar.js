import React from 'react';
import PropTypes from 'prop-types';

/**
 * @summary Progress bar with customizable completion percentage.
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#progress-bar
 * 
 * @example
 * <ProgressBar percentComplete={50} />
 * 
 * @param {number} percentComplete - Sets the completion percentage to display. 
 * @returns {React.ReactElement} returns ProgressBar component.
 */

const ProgressBar = ({ percentComplete }) => {
  return (
    <div className='progress'>
      <div className={'progress-bar bg-highlight overflow-auto'} role={'progressbar'} aria-valuenow={percentComplete} aria-valuemin={'0'} aria-valuemax={'100'} style={{ color: '#000', width: `${percentComplete}%` }} tabIndex={'0'}>
        {`${percentComplete}%`}
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number.isRequired
}

export default ProgressBar