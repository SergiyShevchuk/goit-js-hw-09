const colors = selector => document.querySelector(selector);

const btnStart = colors('button[data-start]');
const btnStop = colors('button[data-stop]');
const body = colors('body');

let colorBody = '';
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const switchColor = () => {
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    btnStart.disabled = true;
    btnStop.disabled = false;
  }, 1000);
};

const stopSwitch = () => {
  clearInterval(intervalId);
  btnStop.disabled = true;
  btnStart.disabled = false;
  
};

btnStart.addEventListener('click', switchColor);
btnStop.addEventListener('click', stopSwitch);

console.log(backgroundColor);