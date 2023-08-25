const col = document.getElementById('color');
const background = document.getElementById('backgroundcolor');
const padding  = document.getElementById('padding ');
const fontSize  = document.getElementById('fontSize ');
const fontWeight  = document.getElementById('fontWeight ');
const target = document.getElementById('targetDiv');

color.addEventListener('change', () => {
  target.style.color = col.value;
});

backgroundcolor.addEventListener('change', () => {
  target.style.backgroundColor = background.value;
});

padding .addEventListener('change', () => {
  target.style.padding = padding .value;
});

fontSize .addEventListener('change', () => {
  target.style.fontSize = fontSize .value;
});

fontWeight .addEventListener('change', () => {
  target.style.fontWeight = fontWeight .value;
});