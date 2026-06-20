const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const pages = document.querySelectorAll('.frontpage');

if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');

  const revealPage = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      target.classList.toggle('is-visible', isIntersecting);
    });
  }, { threshold: 0.12 });

  pages.forEach((page) => revealPage.observe(page));
}
