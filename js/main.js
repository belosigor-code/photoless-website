/* ── MOBILE NAV TOGGLE ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('main-nav');

if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mainNav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ── SMOOTH SCROLL ─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── SCROLL FADE-IN ────────────────────────────────────────── */
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // Stagger children in the same grid/flex parent
      const siblings = Array.from(
        entry.target.parentElement.querySelectorAll('.fade-in:not(.is-visible)')
      );
      const idx = siblings.indexOf(entry.target);
      const delay = Math.max(0, idx) * 80;

      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, delay);

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => observer.observe(el));
}
