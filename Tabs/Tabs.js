function tabsCreator() {
  const tabsContainer = document.createElement("ul");
  tabsContainer.classList.add("tabs");

  const pomodoroTab = document.createElement("li");
  pomodoroTab.textContent = "Pomodoro";
  pomodoroTab.classList.add("tab");
  pomodoroTab.classList.add("active");

  const shortBreakTab = document.createElement("li");
  shortBreakTab.textContent = "Short Break";
  shortBreakTab.classList.add("tab");

  const longBreakTab = document.createElement("li");
  longBreakTab.textContent = "Long Break";
  longBreakTab.classList.add("tab");

  tabsContainer.append(pomodoroTab, shortBreakTab, longBreakTab);

  tabsContainer.addEventListener("click", e => {
    Array.from(tabsContainer.children).forEach(element => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.textContent === "Pomodoro") {
      currentTime = 25;
      startCountdown(currentTime);
    } else if (e.target.textContent === "Short Break") {
      currentTime = 5;
      startCountdown(currentTime);
    } else if (e.target.textContent === "Long Break") {
      currentTime = 10;
      startCountdown(currentTime);
    }
  });

  return tabsContainer;
}

mainContainer.append(tabsCreator());
