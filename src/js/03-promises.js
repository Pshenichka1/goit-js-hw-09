import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
}


function handleStartCreatePromise(el) {
  el.preventDefault();
  
  const refs = {
  firstDelay: Number(form.querySelector('input[name="delay"]').value),
  delayStep: Number(form.querySelector('input[name="step"]').value),
  amount: Number(form.querySelector('input[name="amount"]').value),
  btnSubmit: form.querySelector('button'),
  }
  let delay = refs.firstDelay;
  for (let i = 1; i <= refs.amount; i += 1) {
    delay += refs.delayStep;
    createPromise(i, delay).then(onSuccess).catch(onError);
    form.reset();
  }
} 

function onSuccess({ position, delay }) {
  Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
};
function onError({ position, delay }) {
  Notiflix.Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
};

form.addEventListener('submit', handleStartCreatePromise);
