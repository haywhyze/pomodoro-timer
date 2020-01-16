const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
let countDown;
let currentTime = 25 * 60 + 1000;

function startCountdown(time) {
  const countDownTime = new Date().getTime() + time;
  
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
      clearInterval(countDown);

      minutesElement.textContent = (0).toLocaleString("en-US", {
        minimumIntegerDigits: 2
      });

      secondsElement.textContent = (0).toLocaleString("en-US", {
        minimumIntegerDigits: 2
      });
    }
  }, 500);
}

function stopCountdown() {}

function resetCountdown() {}
