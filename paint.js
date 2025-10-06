// paint.js
class StripesPainter {
  static get inputProperties() {
    return [];
  }

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
