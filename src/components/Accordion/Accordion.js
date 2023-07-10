import React from 'react';
import PropTypes from 'prop-types';
import BasicAccordion from './BasicAccordion';
import AccordionList from './AccordionList';

const Accordion = ({ type, summaryStr, contentArr }) => (type === 'list' ? <AccordionList contentArr={contentArr} /> : <BasicAccordion summaryStr={summaryStr} contentArr={contentArr} />);

Accordion.propTypes = {
  type: PropTypes.string,
  summaryStr: PropTypes.string,
  contentArr: PropTypes.array.isRequired
}

export default Accordion