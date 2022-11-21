import React from 'react';
import BasicAccordion from './BasicAccordion';
import AccordionList from './AccordionList';

const Accordion = ({ type, summaryStr, bodyArr, contentArr }) => (type === 'list' ? <AccordionList contentArr={contentArr} /> : <BasicAccordion summaryStr={summaryStr} contentArr={contentArr} />);

export default Accordion