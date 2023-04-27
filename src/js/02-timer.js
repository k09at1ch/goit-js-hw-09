import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.getElementById('datetime-picker');
const startButton = document.getElementById('btn');
const daysValue = document.getElementById('value1');
const hoursValue = document.getElementById('value2');
const minutesValue = document.getElementById('value3');
const secondsValue = document.getElementById('value4');
let arr=[]
const dateSelector = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
  dateFormat: 'Y-m-d H:i',
});
startButton.addEventListener("click", (event)=>{
    const selectedDate = dateSelector.selectedDates[0];
    const now = new Date();
    
    if (selectedDate <= now) {
      console.log('Please choose a date in the future.');
      return;
    }
    const countdownDate = dateSelector.selectedDates[0];
    let countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      daysValue.textContent = days.toString().padStart(2, '0');
      hoursValue.textContent = hours.toString().padStart(2, '0');
      minutesValue.textContent = minutes.toString().padStart(2, '0');
      secondsValue.textContent = seconds.toString().padStart(2, '0');
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        daysValue.innerHTML="00"
        hoursValue.innerHTML="00"
        minutesValue.innerHTML="00"
        secondsValue.innerHTML="00" 
      }
    }, 1000);
})