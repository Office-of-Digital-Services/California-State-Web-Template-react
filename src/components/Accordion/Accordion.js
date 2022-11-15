import React from 'react';
import BasicAccordion from './BasicAccordion';
import AccordionList from './AccordionList';

const Accordion = ({ type, summaryStr, bodyArr, contentObj }) => (type === 'list' ? <AccordionList contentObj={contentObj} /> : <BasicAccordion summaryStr={summaryStr} bodyArr={bodyArr} />);

export default Accordion