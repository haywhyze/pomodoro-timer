const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
let currentTime = 25 * 60 * 1000;
let countdown;

function startCountdown(time) {
  const countDownTime = new Date().getTime() + time;

  if (countdown) clearInterval(countdown);

  countdown = setInterval(() => {
    const now = new Date().getTime();

    let currentTime = countDownTime - now;

    const minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

    minutesElement.textContent = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });
    secondsElement.textContent = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });
  }, 500);
}

function stopCountdown() {
  clearInterval(countdown);
  countdown = null;
}

function resetCountdown() {
  minutesElement.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2
  });
  secondsElement.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2
  });
}
