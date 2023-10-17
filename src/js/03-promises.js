import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form.form'),
  step: document.querySelector('[name="step"]'),
  delay: document.querySelector('[name="delay"]'),
  amount: document.querySelector('[name="amount"]'),
}

refs.form.addEventListener('submit', onPromiceCreate);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
    
  });
  
}


function onPromiceCreate(evt) {
  evt.preventDefault();

  let valueDelay = Number(refs.delay.value);
  let valueStep = Number(refs.step.value);
  let valueAmount = Number(refs.amount.value);

  for (let i = 1; i <= valueAmount; i += 1) {
    let position = i + 1;
    let promiceDelay = valueDelay + valueStep * i;
  

    createPromise(position, promiceDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}