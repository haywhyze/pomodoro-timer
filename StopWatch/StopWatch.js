function stopWatchCreator() {
  const stopWatchContainer = document.createElement("div");
  const watchDisplay = document.createElement("section");
  const minute = document.createElement("span");
  const divider = document.createElement("span");
  const seconds = document.createElement("span");

  stopWatchContainer.classList.add("watch-container");
  watchDisplay.classList.add("watch-display");

  minute.id = "minutes"
  seconds.id = "seconds"
  minute.textContent = "25";
  divider.textContent = ":";
  seconds.textContent = "00";

  watchDisplay.append(
    minute,
    divider,
    seconds
  );

  stopWatchContainer.append(watchDisplay);

  return stopWatchContainer;
}

mainContainer.append(stopWatchCreator());
