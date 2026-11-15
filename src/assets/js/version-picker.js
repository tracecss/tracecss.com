const picker = document.getElementById('version-picker-controls');
const build = document.getElementById('trace-build');
const scoped = document.getElementById('trace-scoped');
const output = document.querySelector('#version-picker-result code');

function updateStylesheet() {
  const variant = build.value === 'classless' ? '.classless' : '';
  const scope = scoped.checked ? '.conditional' : '';
  const href = `https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace${variant}${scope}.min.css`;

  output.textContent = `<link rel="stylesheet" href="${href}" />`;
}

picker.addEventListener('change', updateStylesheet);
updateStylesheet();
picker.hidden = false;
