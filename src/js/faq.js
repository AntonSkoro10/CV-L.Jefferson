import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// const accordionContainerFaq = document.querySelector(
//   '.accordion-container.faq-list'
// );
// const accordionFaq = new Accordion(accordionContainerFaq, {});

// document.addEventListener('DOMContentLoaded', function () {
//   const accordionContainerFaq = document.querySelector(
//     '.accordion-container.faq-list'
//   );
//   const accordionItems = accordionContainerFaq.querySelectorAll('.faq-item.ac');

//   if (accordionItems.length > 0) {
//     const firstItem = accordionItems[0];
//     firstItem.classList.add('active');
//     firstItem.querySelector('.faq-text-box.ac-panel').style.display = 'block';
//     firstItem.querySelector('.faq-svg-down').style.transform = 'rotate(180deg)';
//   }

//   const accordionFaq = new Accordion(accordionContainerFaq, {
//     onOpen: function (currentElement) {
//       currentElement.classList.add('active');
//     },
//     onClose: function (currentElement) {
//       currentElement.classList.remove('active');
//     },
//   });

//   if (accordionFaq.items.length > 0) {
//     accordionFaq.open(accordionFaq.items[0]);
//   }

//   accordionFaq;
// });

document.addEventListener('DOMContentLoaded', function () {
  const accordionContainerFaq = document.querySelector(
    '.accordion-container.faq-list'
  );
  const accordionItems = accordionContainerFaq.querySelectorAll('.faq-item.ac');

  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    firstItem.classList.add('active');
    firstItem.querySelector('.faq-text-box.ac-panel').style.display = 'block';
    firstItem.querySelector('.faq-svg').style.transform = 'rotate(180deg)';
  }

  const accordionFaq = new Accordion(accordionContainerFaq, {
    onOpen: function (currentElement) {
      currentElement.classList.add('active');
    },
    onClose: function (currentElement) {
      currentElement.classList.remove('active');
    },
  });
});
