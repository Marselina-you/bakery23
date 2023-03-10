document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.catalog-accordion__item');
  const menuAccordion = document.querySelectorAll('.menu-accordion__item');

  if (menuAccordion) {
    console.log(menuAccordion);

    menuAccordion.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;

        const control = self.querySelector('.menu-accordion__control');

        const content = self.querySelector('.menu-accordion__content');
        self.classList.toggle('open');

        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      })
    })
  }

  if (accordions) {
    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.catalog-accordion__control');
        const content = self.querySelector('.catalog-accordion__content');

        self.classList.toggle('open');

        // если открыт аккордеон
        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      });
    });
  }


});
