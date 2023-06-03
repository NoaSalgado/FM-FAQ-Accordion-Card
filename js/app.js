const accordionQuestions = document.querySelectorAll('.accordion-question');

accordionQuestions.forEach((accordionQuestion) =>
  accordionQuestion.addEventListener('click', toggleAccordion)
);

function toggleAccordion() {
  let isExtended = this.getAttribute('aria-expanded');
  accordionQuestions.forEach((accordionQuestion) =>
    accordionQuestion.setAttribute('aria-expanded', 'false')
  );

  if (isExtended === 'false') {
    this.setAttribute('aria-expanded', true);
  }
}
