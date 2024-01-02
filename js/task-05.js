function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.boby;
const colorSpan = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', () => {
const randomColor = getRandomHexColor();
bodyElement.style.backgroundColor = randomColor;
colorSpan.textContent = randomColor;
});

