(() => {
  const image = document.querySelector('[data-portrait-image]');
  if (!image) return;

  const hidePortrait = () => document.body.classList.add('no-portrait');
  if (image.complete && image.naturalWidth === 0) hidePortrait();
  image.addEventListener('error', hidePortrait, { once: true });
})();
