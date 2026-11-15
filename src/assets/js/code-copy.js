const template = document.querySelector('#code-copy-template');

if (navigator.clipboard?.writeText) {
  for (const code of document.querySelectorAll(
    'main pre:not([data-no-copy]) > code',
  )) {
    const pre = code.parentElement;
    const wrapper = document.createElement('div');
    const controls = template.content.cloneNode(true);
    const button = controls.querySelector('button');
    const status = controls.querySelector('[role="status"]');
    let resetStatus;

    wrapper.className = 'code-block';
    pre.before(wrapper);
    wrapper.append(pre, controls);

    button.addEventListener('click', async () => {
      clearTimeout(resetStatus);
      status.textContent = '';

      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = template.dataset.copied;
      } catch {
        status.textContent = template.dataset.copyFailed;
      }

      resetStatus = setTimeout(() => {
        status.textContent = '';
      }, 2500);
    });
  }
}
