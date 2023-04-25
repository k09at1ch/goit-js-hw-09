// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        const message = `Promise ${position} resolved successfully.`;
        console.log(message);
        resolve(message);
      } else {
        const message = `Promise ${position} failed to resolve.`;
        console.log(message);
        reject(message);
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);

  const promises = [];
  for (let i = 1; i <= amount; i++) {
    promises.push(createPromise(i, delay));
    delay += step;
  }

  Promise.allSettled(promises)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error(error);
    });
});