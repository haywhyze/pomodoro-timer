function tabsCreator() {
  const tabsContainer = document.createElement("ul");
  tabsContainer.classList.add("tabs");

  const pomodoroTab = document.createElement("li");
  pomodoroTab.textContent = "Pomodoro";
  pomodoroTab.classList.add("tab");

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
  });

  return tabsContainer;
}

mainContainer.append(tabsCreator());
