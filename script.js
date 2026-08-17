const botao = document.getElementById('botao-misterioso');
const botaoParar = document.getElementById('botao-parar');
const abelha = document.getElementById('abelha');

let intervalo = null;

botao.addEventListener('click', () => {
  abelha.style.display = 'block';
  botaoParar.classList.remove('escondido');

  if (intervalo !== null) {
    return;
  }

  intervalo = setInterval(() => {
    const maxX = window.innerWidth - abelha.offsetWidth;
    const maxY = window.innerHeight - abelha.offsetHeight;

    const novoX = Math.random() * maxX;
    const novoY = Math.random() * maxY;

    abelha.style.left = `${novoX}px`;
    abelha.style.top = `${novoY}px`;
  }, 900);
});

botaoParar.addEventListener('click', () => {
  clearInterval(intervalo);
  intervalo = null;
  botaoParar.classList.add('escondido');
});