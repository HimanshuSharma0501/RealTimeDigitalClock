let intervalId;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  const clockElement = document.getElementById("clock");
  clockElement.textContent = timeString;
  document.getElementById("displayTimeBtn").innerHTML = "Stop Time";
}

const displayTimeBtn = document.getElementById("displayTimeBtn");
displayTimeBtn.addEventListener("click", () => {
  if (!intervalId) {
    updateClock();
    intervalId = setInterval(updateClock, 1000);
  } else {
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("displayTimeBtn").innerHTML = "Display Time";
  }
});
