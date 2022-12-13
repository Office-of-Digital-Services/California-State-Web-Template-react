import React from 'react'

const ProgressBar = ({ percentComplete }) => {
  return (
    <div className='progress'>
      <div className={'progress-bar bg-highlight color-gray-dark overflow-auto'} role={'progressbar'} aria-valuenow={percentComplete} aria-valuemin={'0'} aria-valuemax={'100'} style={{ width: `${percentComplete}%` }} tabIndex={'0'}>
        {`${percentComplete}%`}
      </div>
    </div>
  )
}

export default ProgressBar