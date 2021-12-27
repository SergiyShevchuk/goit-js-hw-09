import Notiflix from 'notiflix';

const promiseGenerator = selector => document.querySelector(selector);

const delay = promiseGenerator('input[name="delay"]');
const step = promiseGenerator('input[name="step"]');
const amount = promiseGenerator('input[name="amount"]');
const btnSubmit = promiseGenerator('button[type="submit"]');

const runFunction = e => {
  e.preventDefault();

  let delayValue = delay.valueAsNumber;
  let stepValue = step.valueAsNumber;
  let amountValue = amount.valueAsNumber;

  function createPromise(position, delayValue) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.5;
      setTimeout(() => {
        if (shouldResolve) {
          resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayValue}ms`));
        } else {
          reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayValue}ms`));
        }
      }, delayValue);
    });
  }

  for (let i = 1; i <= amountValue; i++) {
    let position = i;

    createPromise(position, delayValue)
      .then(value => {
        console.log(`✅ Fulfilled promise ${position} in ${delayValue}ms`);
      })
      .catch(err => {
        console.log(`❌ Rejected promise ${position} in ${delayValue}ms`);
      });
    delayValue = delayValue + stepValue;
    position++;
  }
};

btnSubmit.addEventListener('click', runFunction);