const generatorButton = document.querySelector<HTMLElement>('button');
const bg = document.querySelector<HTMLElement>('main');
const colorHex = document.querySelector('.hex');

function generateColors() {
  const color = '#' + Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6, '0');

  if (bg && colorHex) {
    const button = bg.querySelector('button')
    button?.style.borderColor
    bg.style.backgroundColor = color;
    colorHex.textContent = color
  }

}



function copyToClipBoard() {
  // TODO: Need a look to add an alert as it was copied
  navigator.clipboard.writeText(colorHex?.textContent!)

}


generatorButton?.addEventListener('click', generateColors);
colorHex?.addEventListener('click', copyToClipBoard);

generateColors()