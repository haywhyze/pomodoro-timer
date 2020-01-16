const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
let countDown;
let currentTime = 25 ;

function startCountdown(minute) {
  const countDownTime = new Date().getTime() + minute * 60 * 1000;

  if (countDown) clearInterval(countDown);

  countDown = setInterval(() => {
    const now = new Date().getTime();

    const timeDifference = countDownTime - now;

    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    minutesElement.textContent = minutes.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });

    secondsElement.textContent = seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    });

    if (timeDifference < 0) {
      stopCountdown()
      resetCountdown()
    }
  }, 500);
}

function stopCountdown() {
  clearInterval(countDown);
  countDown = null;
}

function resetCountdown() {
  minutesElement.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2
  });

  secondsElement.textContent = (0).toLocaleString("en-US", {
    minimumIntegerDigits: 2
  });
}
