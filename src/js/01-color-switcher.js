// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }
// const background=document.getElementsByTagName("body")
// const startButton = document.querySelectorAll('[data-start]')[0];
// const stopButton = document.querySelectorAll('[data-stop]')[0];
// console.log(startButton)
// const start=document.getElementById("start")
// let timer=null
// startButton.addEventListener("click", (event)=>{
//     startButton.disabled=true
//     timer=setInterval(()=>{
//         background.style.backgroundcolor=getRandomHexColor()
//         console.log(getRandomHexColor())
//     }, 500)
// })

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let timer;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  timer = setInterval(function() {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 500);
});

stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  clearInterval(timer);
});
