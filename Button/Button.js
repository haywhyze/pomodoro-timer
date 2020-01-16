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

  return buttonContainer;
}

mainContainer.append(buttonCreator());
