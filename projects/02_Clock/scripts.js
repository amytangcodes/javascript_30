const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setInterval(setDate, 1000);