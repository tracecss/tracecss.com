const toggle = document.getElementById('theme-toggle');

function syncToggle() {
  const mode = document.documentElement.dataset.mode;
  toggle.checked = mode === 'dark';
}

if (toggle) {
  syncToggle();
  toggle.closest('label').hidden = false;

  toggle.addEventListener('change', () => {
    const mode = toggle.checked ? 'dark' : 'light';
    document.documentElement.dataset.mode = mode;
    try {
      localStorage.setItem('trace-theme', mode);
    } catch {
      // Theme switching still works when storage is unavailable.
    }
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== 'trace-theme' && event.key !== null) return;
    document.documentElement.dataset.mode =
      event.newValue === 'dark' ? 'dark' : 'light';
    syncToggle();
  });
}
