const features = [
  {
    name: 'CSS Backdrop Filter',
    test: () => CSS.supports('backdrop-filter', 'blur(5px)')
  },
  {
    name: 'CSS Subgrid',
    test: () => CSS.supports('display', 'subgrid')
  },
  {
    name: 'Web Animations API',
    test: () => typeof document.body.animate === 'function'
  },
  {
    name: 'WebKit Line Clamp',
    test: () => CSS.supports('-webkit-line-clamp', '3')
  }
];

const list = document.getElementById('features');

features.forEach(feature => {
  const li = document.createElement('li');
  li.textContent = `${feature.name}: ${feature.test() ? '✅ Supported' : '❌ Not supported'}`;
  list.appendChild(li);
});
