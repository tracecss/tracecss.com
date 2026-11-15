for (const frame of document.querySelectorAll('.scope-previews iframe')) {
  const observer = new ResizeObserver(([entry]) => {
    const height = Math.ceil(entry.borderBoxSize[0].blockSize);
    frame.style.blockSize = `${height}px`;
  });

  function observeContent() {
    observer.disconnect();
    const body = frame.contentDocument?.body;
    if (body) observer.observe(body, { box: 'border-box' });
  }

  frame.addEventListener('load', observeContent);
  observeContent();
}
