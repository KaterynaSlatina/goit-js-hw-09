import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    input: document.getElementById('datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),

}

Notiflix.Report.info('Hello!', 'Please, choose date and click button Start', 'OK');


refs.btn.disabled = true;
refs.btn.addEventListener('click', onStartBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      // console.log(selectedDates[0]);
      const currentDay = new Date();
      if (selectedDates[0] < currentDay) {
          Notiflix.Report.failure('Warning!', 'Please, choose future date', 'OK');
          refs.btn.disabled = true;
      } else {
          Notiflix.Report.success('Nice date!','Click `Start` to continue','Start');
          refs.btn.disabled = false;
      }

  },
};

const pickr = flatpickr(refs.input, options);

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function onStartBtn() {    
    const timerId = setInterval(() => {
        const selectedTime = pickr.selectedDates[0];
    
    if (selectedTime >= 0) {
        let timeConvertor = convertMs(selectedTime);
        refs.days.textContent = timeConvertor.days;
        refs.hours.textContent = timeConvertor.hours;
        refs.minutes.textContent = timeConvertor.minutes;
        refs.seconds.textContent = timeConvertor.seconds;
    } else {
    clearInterval(intervalId);
}
}, 1000);
}


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
}
