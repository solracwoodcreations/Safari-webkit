// script.js
if ('paintWorklet' in CSS) {
  const blob = new Blob([`
    class StripesPainter {
      static get inputProperties() { return []; }
      paint(ctx, size) {
        const { width, height } = size;
        const stripeHeight = 10;
        for (let y = 0; y < height; y += stripeHeight * 2) {
          ctx.fillStyle = "#ff4081";
          ctx.fillRect(0, y, width, stripeHeight);
        }
      }
    }
    registerPaint("stripes", StripesPainter);
  `], { type: 'application/javascript' });

  const blobURL = URL.createObjectURL(blob);
  CSS.paintWorklet.addModule(blobURL);
} else {
  console.warn('CSS.paintWorklet not supported in this browser.');
}
