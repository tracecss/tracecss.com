const languagePicker = document.querySelector('#language-picker');

languagePicker.addEventListener('change', () => {
  window.location.assign(languagePicker.value);
});

window.addEventListener('pageshow', () => {
  languagePicker.selectedIndex = [...languagePicker.options].findIndex(
    (option) => option.defaultSelected,
  );
});

languagePicker.parentElement.hidden = false;
