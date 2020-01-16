function stopWatchCreator() {
  const timerContainer = document.createElement("div");
  const watchDisplay = document.createElement("section");
  const minutes = document.createElement("span");
  const divider = document.createElement("span");
  const seconds = document.createElement("span");

  timerContainer.classList.add("timer-container");
  watchDisplay.classList.add("watch-display");

  minutes.id = "minutes";
  seconds.id = "seconds";
  minutes.textContent = "25";
  divider.textContent = ":";
  seconds.textContent = "00";

  watchDisplay.append(minutes, divider, seconds);

  timerContainer.append(watchDisplay);

  return timerContainer;
}

mainContainer.append(stopWatchCreator());
