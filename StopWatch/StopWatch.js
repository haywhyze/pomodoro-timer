function stopWatchCreator() {
  const stopWatchContainer = document.createElement("div");
  const watchDisplay = document.createElement("section");
  const tensMinute = document.createElement("span");
  const unitMinute = document.createElement("span");
  const divider = document.createElement("span");
  const tensSeconds = document.createElement("span");
  const unitSeconds = document.createElement("span");

  stopWatchContainer.classList.add("watch-container");
  watchDisplay.classList.add("watch-display");

  tensMinute.textContent = "0";
  unitMinute.textContent = "0";
  divider.textContent = ":";
  tensSeconds.textContent = "0";
  unitSeconds.textContent = "0";

  watchDisplay.append(
    ...[tensMinute, unitMinute, divider, tensSeconds, unitSeconds]
  );

  stopWatchContainer.append(watchDisplay);

  return stopWatchContainer;
}

mainContainer.append(stopWatchCreator());
