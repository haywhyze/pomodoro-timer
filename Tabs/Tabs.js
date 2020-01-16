function tabsCreator() {
  const tabsContainer = document.createElement("ul");
  tabsContainer.classList.add("tabs");

  const pomodoroTab = document.createElement("li");
  pomodoroTab.textContent = "Pomodoro";
  pomodoroTab.classList.add('tab');
  pomodoroTab.classList.add('active');

  const shortTab = document.createElement("li");
  shortTab.textContent = "Short Break";
  shortTab.classList.add('tab');

  const longTab = document.createElement("li");
  longTab.textContent = "Long Break";
  longTab.classList.add('tab');

  tabsContainer.append(pomodoroTab, shortTab, longTab);

  tabsContainer.addEventListener('click', e => {
    Array.from(tabsContainer.children).forEach(element => {
      element.classList.remove("active");
    })
    e.target.classList.add("active");
  })

  return tabsContainer;
}

mainContainer.append(tabsCreator());
