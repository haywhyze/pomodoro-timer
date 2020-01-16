function buttonCreator() {
  const buttonContainer = document.createElement("section");
  buttonContainer.classList.add("button-container");

  const stopButton = document.createElement("button");
  stopButton.textContent = "Stop";
  stopButton.classList.add("stop");

  const resetButton = document.createElement("button");
  resetButton.textContent = "Reset";
  resetButton.classList.add("reset");

  const startButton = document.createElement("button");
  startButton.textContent = "Start";
  startButton.classList.add("start");

  buttonContainer.append(startButton, stopButton, resetButton);

  buttonContainer.addEventListener("click", e => {
    if (e.target.textContent === "Reset") {
      stopCountdown();
      resetCountdown();
    } else if (e.target.textContent === "Start") {
      if (!countDown) startCountdown(currentTime);
    } else if (e.target.textContent === "Stop") {
      clearInterval(countDown);
      countDown = null;
    }
  });

  return buttonContainer;
}

mainContainer.append(buttonCreator());
