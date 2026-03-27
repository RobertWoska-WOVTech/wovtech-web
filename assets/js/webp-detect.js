// Detekcia WebP support a pridanie triedy
(function() {
  if (!document.documentElement.classList) return;
  
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  
  if (canvas.toDataURL('image/webp').indexOf('image/webp') === 0) {
    document.documentElement.classList.add('webp-support');
  } else {
    document.documentElement.classList.add('no-webp');
  }
})();
