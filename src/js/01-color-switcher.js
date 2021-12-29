const colors = selector => document.querySelector(selector);

const btnStart = colors('button[data-start]');
const btnStop = colors('button[data-stop]');
const body = colors('body');

const switchColor = () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
  ;
};

const stopSwitch = () => {
  clearInterval(intervalId);
  btnStop.disabled = true;
  btnStart.disabled = false;
  
};

btnStart.addEventListener('click', switchColor);
btnStop.addEventListener('click', stopSwitch);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}