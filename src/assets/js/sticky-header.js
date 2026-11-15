const header = document.querySelector('.site-header');

function updateScrollPadding() {
  document.documentElement.style.setProperty(
    '--site-header-height',
    `${header.offsetHeight}px`,
  );
}

updateScrollPadding();
new ResizeObserver(updateScrollPadding).observe(header);

function updateHeaderShadow() {
  header.classList.toggle('is-scrolled', window.scrollY > 0);
}

updateHeaderShadow();
window.addEventListener('scroll', updateHeaderShadow, { passive: true });
