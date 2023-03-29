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
let selectedDate = null;


flatpickr(dateTimeInput,
    (options = { 
        intervalId: null,
        isActiv: false,
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose([selectedDates]) {
            
            if (selectedDate < new Date()) {
                startBtn.disabled = true;
                Notiflix.Notify.failure('Please choose a date in the future');
                
            }
            startBtn.disabled = false;
            selectedDate = selectedDates;
            return;
        },
        start() {
            let deltaTime = 0;
            if (this.isActiv) {
                return;
            }
            this.intervalId = setInterval(() => {
                startBtn.disabled = true;
                const nowTime = new Date();
                deltaTime = selectedDate - nowTime;
                if (deltaTime <= 0) {
                    clearInterval(this.intervalId);
                }
                this.isActiv = true;
                const components = convertMs(deltaTime);
                daysEl.textContent = components.days;
                hoursEl.textContent = components.hours;
                minutesEl.textContent = components.minutes;
                secondsEl.textContent = components.seconds;
            }, 1000);
        },
    }
    ));
startBtn.addEventListener('click', () => {
    options.start();
});
        
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

