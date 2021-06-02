const countdown = () => {
  const countDate = new Date("Jul 17,2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //intina the time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //
  const reminingDay = Math.floor(gap / day);
  const reminingHour = Math.floor((gap % day) / hour);
  const reminingMinute = Math.floor((gap % hour) / minute);
  const reminingSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = reminingDay;
  document.querySelector(".hour").innerText = reminingHour;
  document.querySelector(".minute").innerText = reminingMinute;
  document.querySelector(".second").innerText = reminingSecond;
};
//run the function
setInterval(countdown, 1000);
