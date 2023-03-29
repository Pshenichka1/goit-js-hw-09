import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";


const dateTimeInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

startBtn.disabled = true;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const currentDate = new Date();
        if (selectedDates[0] < currentDate) {
            startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        }
        startBtn.disabled = false;
    },
};
const usingFlatpickr = flatpickr(dateTimeInput, options);

        
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};
function startTimer() {
    const selectedDate = usingFlatpickr.selectedDates[0];
    intervalId = setInterval(() => {
        
        const startTime = new Date();
        const deltaTime = selectedDate - startTime;
        startBtn.disabled = true;
        if (deltaTime <= 0) {
            clearInterval(intervalId);
            return;
        }
        updateTimer(convertMs(deltaTime));
    }, 1000);
};
function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
};
startBtn.addEventListener('click', startTimer);
