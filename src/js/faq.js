import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainerFaq = document.querySelector(
  '.accordion-container.faq-list'
);
const accordionFaq = new Accordion(accordionContainerFaq, {});

accordionFaq;
