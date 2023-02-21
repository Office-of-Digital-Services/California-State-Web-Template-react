//@ts-check

import React from 'react';
import PropTypes from 'prop-types';
import BasicAccordion from './BasicAccordion';
import AccordionList from './AccordionList';

/**
 * @summary Determines which accordion component to render
 * @see https://github.com/Office-of-Digital-Services/California-State-Web-Template-react/wiki/Components#accordion
 * 
 * @example
 * // Renders a BasicAccordion component
 * <Accordion 
 *  type={'basic'}
 *  summaryStr={'Here is a summary'}
 *  contentArr={
 *   [
 *    'Here is some text for body #1',
 *    'Here is more text for another paragraph'
 *   ]
 *  }
 * />
 * 
 * @param {('basic'|'list')} [type='basic'] - Type of accordion to render. Available types are 'basic' and 'list'.
 * @param {string} summaryStr - Text displayed at accordion header
 * @param {string[]} contentArr - Text displayed when accordion is opened. Each array index will generate a new <p> tag with the array index as the content.
 * @returns {React.ReactElement} Returns the Accordion component
 */

const Accordion = ({ type = 'basic', summaryStr, contentArr }) => (type === 'list' ? <AccordionList contentArr={contentArr} /> : <BasicAccordion summaryStr={summaryStr} contentArr={contentArr} />);

Accordion.propTypes = {
  type: PropTypes.string,
  summaryStr: PropTypes.string.isRequired,
  contentArr: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Accordion