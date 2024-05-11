function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let meridian = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const milliseconds = now.getMilliseconds().toString().padStart(3, 0);

  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}:${milliseconds} ${meridian}`;
}

updateClock();
setInterval(updateClock, 10);
