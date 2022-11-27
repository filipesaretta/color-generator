const generatorButton = document.querySelector<HTMLElement>('button')
const bg = document.querySelector<HTMLElement>('main')

function generateColors() {
  const color = '#' + Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6, 0);
  const hexText = bg?.querySelector('.hex');

  if (bg && hexText) {
    const button = bg.querySelector('button')
    button?.style.borderColor
    bg.style.backgroundColor = color;
    hexText.textContent = color
  }

}


generatorButton?.addEventListener('click', generateColors);

generateColors()