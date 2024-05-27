// SUCCESS REDIRECT COUNTDOWN (5 seconds)
const secondsSpan = document.getElementById("seconds");
let countdownSeconds = 3;

const countdown = setInterval(function () {
  secondsSpan.textContent = countdownSeconds;
  countdownSeconds--;
  if (countdownSeconds == 0) {
    clearInterval(countdown);
    window.location.href = "home.html";
  }
}, 1000);
