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
  navigator.clipboard.writeText(colorHex?.textContent!).then(() => {
    const tag = bg?.querySelector('.tag')
    tag?.classList.add('is-copied');
    setTimeout(() => {
      tag?.classList.remove('is-copied');
    }, 1500);
  })

}


generatorButton?.addEventListener('click', generateColors);
colorHex?.addEventListener('click', copyToClipBoard);

generateColors()