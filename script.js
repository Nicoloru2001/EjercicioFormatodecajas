const modoClaroBtn = document.getElementById('modo-claro');
const modoOscuroBtn = document.getElementById('modo-oscuro');
const body = document.body;

modoClaroBtn.addEventListener('click', () => {
  body.classList.remove('dark-mode');
});

modoOscuroBtn.addEventListener('click', () => {
  body.classList.add('dark-mode');
});
