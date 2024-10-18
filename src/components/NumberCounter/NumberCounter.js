import React from 'react';
import { useEffect } from 'react';
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

  useEffect(() => {
    var elements = document.querySelectorAll(".scroll-counter");

    elements.forEach(function (item) {
      // Add new attributes to the elements with the '.scroll-counter' HTML class
      item.counterAlreadyFired = false
      item.counterSpeed = item.getAttribute("data-counter-time") / 45
      item.counterTarget = +item.innerText
      item.counterCount = 0
      item.counterStep = item.counterTarget / item.counterSpeed

      item.updateCounter = function () {
        item.counterCount = item.counterCount + item.counterStep
        item.innerText = Math.ceil(item.counterCount)

        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed)
        } else {
          item.innerText = item.counterTarget
        }
      }
    })

    // Function to determine if an element is visible in the web page
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset
      var boundsTop = el.getBoundingClientRect().top + scroll
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      }
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      )
    }

    // Funciton that will get fired uppon scrolling
    var handleScroll = function handleScroll() {
      elements.forEach(function (item, id) {
        if (true === item.counterAlreadyFired) return;
        if (!isElementVisible(item)) return;
        item.updateCounter();
        item.counterAlreadyFired = true;
      });
    }

    // Fire the function on load and scroll
    window.addEventListener("load", function () {
      handleScroll();
    });
    window.addEventListener("scroll", function () {
      handleScroll();
    });
  }, [])


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