const installer = document.querySelector('#package-install');
const select = installer.querySelector('select');
const panels = installer.querySelectorAll('[data-manager]');

function showSelectedCommand() {
  for (const panel of panels) {
    panel.hidden = panel.dataset.manager !== select.value;
  }
}

select.addEventListener('change', showSelectedCommand);
showSelectedCommand();
select.parentElement.hidden = false;
