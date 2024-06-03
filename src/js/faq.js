import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const accordionContainerFaq = document.querySelector(
    '.accordion-container.faq-list'
  );
  const accordionItems = accordionContainerFaq.querySelectorAll('.faq-item.ac');

  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    firstItem.classList.add('active');
    firstItem.querySelector('.faq-text-box.ac-panel').style.display = 'block';
  }

  const accordionFaq = new Accordion(accordionContainerFaq, {
    openOnInit: [0],
    onOpen: function (currentElement) {
      currentElement.classList.add('active');
    },
    onClose: function (currentElement) {
      currentElement.classList.remove('active');
    },
  });
});
