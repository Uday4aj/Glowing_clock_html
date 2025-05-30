
function updateClock() {
  const now = new Date();
  
  // Convert to India Standard Time (IST)
  const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
  
  // Get hours, minutes, seconds
  let hours = istTime.getHours();
  let minutes = istTime.getMinutes();
  let seconds = istTime.getSeconds();
  
  // Add leading zeros
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  // Update the display
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
