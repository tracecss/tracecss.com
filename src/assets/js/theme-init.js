(() => {
  try {
    const mode = localStorage.getItem('trace-theme');
    if (mode === 'light' || mode === 'dark') {
      document.documentElement.dataset.mode = mode;
    }
  } catch {
    // Use the default light theme when storage is unavailable.
  }
})();
