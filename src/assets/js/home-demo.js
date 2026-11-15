const controls = document.querySelector('[data-demo-controls]');
const themeGroup = controls.querySelector('[data-demo-themes]');
const themeSwitches = [...themeGroup.querySelectorAll('[data-demo-theme]')];
const playground = controls.closest('.home-playground');
const toggle = document.querySelector('[data-demo-toggle]');
const checks = [...controls.querySelectorAll('[data-demo-check]')];
const range = controls.querySelector('[data-demo-range]');
const radios = [...controls.querySelectorAll('input[type="radio"]')];
const select = controls.querySelector('[data-demo-select]');
const note = controls.querySelector('[data-demo-note]');
const fields = [...controls.querySelectorAll('.trace-input-wrap')];
const buttons = [...controls.querySelectorAll('[data-demo-button]')];
const cards = [...controls.querySelectorAll('[data-demo-card]')];
const icons = [...controls.querySelectorAll('.home-demo-icon')];
const iconTile = controls.querySelector('.home-demo-type');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

let sceneTimer;
let rearrangeTimer;
let rangeFrame;
let focusTimer;
let focusPreview;
let step = 0;
let arrangement = 0;
let stoppedByUser = false;
let pointerInteracting = false;
const demoAnimations = new Set();
const busyTimers = new Map();

function animateDemo(element, keyframes, options) {
  const animation = element.animate(keyframes, options);
  demoAnimations.add(animation);
  animation.finished.then(
    () => demoAnimations.delete(animation),
    () => demoAnimations.delete(animation),
  );
}

function press(element) {
  if (reduceMotion.matches) return;
  animateDemo(
    element,
    [{ scale: '1' }, { scale: '0.97', offset: 0.4 }, { scale: '1' }],
    { duration: 360, easing: 'ease-in-out' },
  );
}

function clearFocusPreview() {
  clearTimeout(focusTimer);
  focusPreview?.removeAttribute('data-demo-focus-preview');
  focusPreview = undefined;
}

function showFocusPreview(element) {
  clearFocusPreview();
  focusPreview = element;
  element.setAttribute('data-demo-focus-preview', '');
  focusTimer = setTimeout(clearFocusPreview, 750);
}

function clearLoading(button) {
  clearTimeout(busyTimers.get(button));
  busyTimers.delete(button);
  button.setAttribute('aria-busy', 'false');
}

function showLoading(button) {
  clearTimeout(busyTimers.get(button));
  press(button);
  button.setAttribute('aria-busy', 'true');
  busyTimers.set(
    button,
    setTimeout(() => clearLoading(button), 680),
  );
}

function moveRange(target) {
  cancelAnimationFrame(rangeFrame);
  if (reduceMotion.matches) {
    range.value = target;
    return;
  }

  const initial = Number(range.value);
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / 740, 1);
    const eased = progress * progress * (3 - 2 * progress);
    range.value = initial + (target - initial) * eased;
    if (progress < 1) rangeFrame = requestAnimationFrame(update);
  }
  rangeFrame = requestAnimationFrame(update);
}

function toggleCheck(control) {
  press(control);
  control.checked = !control.checked;
}

const scenes = [
  [checks[0], () => toggleCheck(checks[0])],
  [range, () => moveRange(78)],
  [buttons[0], () => showLoading(buttons[0])],
  [checks[1], () => toggleCheck(checks[1])],
  [
    select,
    () => {
      press(select);
      select.selectedIndex = 1 - select.selectedIndex;
    },
  ],
  [fields[0], () => showFocusPreview(fields[0].querySelector('input'))],
  [buttons[1], () => showLoading(buttons[1])],
  [
    radios[0],
    () => {
      const next = radios.find((radio) => !radio.checked);
      press(next);
      next.checked = true;
    },
  ],
  [range, () => moveRange(25)],
  [checks[2], () => toggleCheck(checks[2])],
  [buttons[2], () => showFocusPreview(buttons[2])],
  [buttons[2], () => showLoading(buttons[2])],
  [fields[1], () => showFocusPreview(fields[1].querySelector('input'))],
  [checks[3], () => toggleCheck(checks[3])],
  [note, () => showFocusPreview(note)],
  ...buttons.slice(3).map((button) => [button, () => showLoading(button)]),
];

function initMasonry() {
  const desktop = matchMedia('(width > 48rem)');
  const observer = new ResizeObserver((entries) => {
    const style = getComputedStyle(controls);
    const row = parseFloat(style.getPropertyValue('--masonry-row'));
    const gap = parseFloat(style.getPropertyValue('--masonry-gap'));

    for (const { target } of entries) {
      const span = Math.ceil((target.offsetHeight + gap) / row);
      target.style.setProperty('--masonry-span', `span ${span}`);
    }
  });

  function syncLayout() {
    controls.toggleAttribute('data-masonry', desktop.matches);
    if (desktop.matches) {
      for (const card of cards) observer.observe(card, { box: 'border-box' });
    } else {
      observer.disconnect();
    }
  }

  desktop.addEventListener('change', syncLayout);
  syncLayout();
}

function rearrange() {
  const visibleCards = cards.filter((card) => card.getClientRects().length);
  if (visibleCards.length < 2) return;
  const items = [...visibleCards, ...icons];
  const iconTileIndex = visibleCards.indexOf(iconTile);
  const previous = items.map((item) => item.getBoundingClientRect());
  arrangement += 1;
  visibleCards.forEach((card, index) => {
    card.style.order = (index + arrangement) % visibleCards.length;
  });
  icons.forEach((icon, index) => {
    icon.style.order = (index + arrangement) % icons.length;
  });
  const offsets = items.map((item, index) => {
    const next = item.getBoundingClientRect();
    return {
      x: previous[index].left - next.left,
      y: previous[index].top - next.top,
    };
  });
  items.forEach((item, index) => {
    const offset = offsets[index];
    const parentOffset =
      index >= visibleCards.length ? offsets[iconTileIndex] : { x: 0, y: 0 };
    const x = offset.x - parentOffset.x;
    const y = offset.y - parentOffset.y;
    if (!x && !y) return;
    const keyframes = [{ transform: `translate(${x}px, ${y}px)` }];
    if (index < visibleCards.length) {
      keyframes.push({
        offset: 0.42,
        transform: `translate(${x * 0.45}px, ${y * 0.45}px) perspective(900px) rotateX(3deg)`,
      });
    }
    keyframes.push({ transform: 'none' });
    animateDemo(item, keyframes, {
      duration: 720,
      easing: 'cubic-bezier(0.25, 0.75, 0.25, 1)',
    });
  });
}

function advance() {
  for (let attempt = 0; attempt < scenes.length; attempt += 1) {
    const [target, run] = scenes[step];
    step = (step + 1) % scenes.length;
    if (target.getClientRects().length) {
      run();
      return;
    }
  }
}

function play() {
  advance();
  sceneTimer = setInterval(advance, 900);
  rearrangeTimer = setInterval(rearrange, 22000);
}

function pause() {
  if (!sceneTimer) return;
  clearInterval(sceneTimer);
  clearInterval(rearrangeTimer);
  sceneTimer = undefined;
  cancelAnimationFrame(rangeFrame);
  clearFocusPreview();
  for (const animation of demoAnimations) animation.cancel();
  demoAnimations.clear();
  for (const button of busyTimers.keys()) clearLoading(button);
}

function syncPlayback() {
  const canPlay = !stoppedByUser && !reduceMotion.matches;
  const label = stoppedByUser ? toggle.dataset.play : toggle.dataset.pause;
  toggle.hidden = reduceMotion.matches;
  toggle.toggleAttribute('data-paused', stoppedByUser);
  toggle.setAttribute('aria-label', label);
  toggle.title = label;
  if (
    !canPlay ||
    document.hidden ||
    pointerInteracting ||
    (document.activeElement !== toggle &&
      controls.contains(document.activeElement))
  ) {
    pause();
  } else if (!sceneTimer) {
    play();
  }
}

toggle.addEventListener('click', () => {
  stoppedByUser = !stoppedByUser;
  pointerInteracting = false;
  syncPlayback();
});
controls.addEventListener('focusin', syncPlayback);
controls.addEventListener('focusout', () => queueMicrotask(syncPlayback));
controls.addEventListener('pointerdown', () => {
  pointerInteracting = true;
  syncPlayback();
});
controls.addEventListener('pointerleave', () => {
  pointerInteracting = false;
  syncPlayback();
});
controls.addEventListener('pointercancel', () => {
  pointerInteracting = false;
  syncPlayback();
});
for (const button of buttons) {
  button.addEventListener('click', () => showLoading(button));
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pointerInteracting = false;
  syncPlayback();
});
reduceMotion.addEventListener('change', syncPlayback);

function syncThemeSwitches() {
  const mode =
    playground.dataset.demoMode || document.documentElement.dataset.mode;
  for (const themeSwitch of themeSwitches) {
    themeSwitch.checked = themeSwitch.dataset.demoTheme === mode;
  }
}

syncThemeSwitches();
themeGroup.hidden = false;
for (const themeSwitch of themeSwitches) {
  themeSwitch.addEventListener('change', () => {
    const mode = themeSwitch.dataset.demoTheme;
    playground.dataset.demoMode = themeSwitch.checked
      ? mode
      : mode === 'light'
        ? 'dark'
        : 'light';
    syncThemeSwitches();
  });
}
new MutationObserver(syncThemeSwitches).observe(document.documentElement, {
  attributeFilter: ['data-mode'],
});

if ('ResizeObserver' in window) initMasonry();
syncPlayback();
