// script.js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('paint.js');
} else {
  console.warn('Paint API not supported');
}
