import React from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({ dateStr, isDefaultColor = false }) => {
  // Set the date we're counting down to
  const countDownDate = new Date(dateStr).getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {

    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now an the count down date
    const distance = countDownDate - now;

    // Time calculations for weeks, days, hours, minutes and seconds
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id='days1', id='hours1' etc.
    document.getElementById('weeks1').innerHTML = weeks;
    document.getElementById('days1').innerHTML = days;
    document.getElementById('hours1').innerHTML = hours;
    document.getElementById('minutes1').innerHTML = minutes;
    document.getElementById('seconds1').innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('days1').innerHTML = 'EXPIRED';
    }
  }, 1000);

  return (
    <div className='group countdown p-x'>
      <div className={`fifth ${isDefaultColor ? 'bg-gray-100' : 'section-primary'} text-center p-b-md p-l-0 p-r-0`}>
        <span className='countdown-text'><abbr title='weeks' aria-label='weeks' className='text-decoration-none'>wks</abbr><br /></span>
        <span id='weeks1'></span>
      </div>
      <div className={`fifth ${isDefaultColor ? 'bg-gray-100' : 'section-primary'} text-center p-b-md p-l-0 p-r-0`}>
        <span className='countdown-text'>days<br /></span>
        <span id='days1'></span>
      </div>
      <div className={`fifth ${isDefaultColor ? 'bg-gray-100' : 'section-primary'} text-center p-b-md p-l-0 p-r-0`}>
        <span className='countdown-text'><abbr title='hours' aria-label='hours' className='text-decoration-none'>hrs</abbr> <br /></span>
        <span id='hours1'></span>
      </div>
      <div className={`fifth ${isDefaultColor ? 'bg-gray-100' : 'section-primary'} text-center p-b-md p-l-0 p-r-0`}>
        <span className='countdown-text'><abbr title='minutes' aria-label='minutes' className='text-decoration-none'>mins</abbr><br /></span>
        <span id='minutes1'></span>
      </div>
      <div className={`fifth ${isDefaultColor ? 'bg-gray-100' : 'section-primary'} text-center p-b-md p-l-0 p-r-0`}>
        <span className='countdown-text'><abbr title='seconds' aria-label='seconds' className='text-decoration-none'>secs</abbr><br /></span>
        <span id='seconds1'></span>
      </div>
    </div>
  )
}

CountdownTimer.propTypes = {
  dateStr: PropTypes.string.isRequired,
  isDefaultColor: PropTypes.bool
}

export default CountdownTimer