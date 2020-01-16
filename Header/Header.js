function headerCreator() {
  const header = document.createElement("header");
  const pageHeader = document.createElement("h1");

  header.append(pageHeader);

  header.classList.add("header");

  pageHeader.textContent = "Pomodoro Timer";

  return header;
}

const mainContainer = document.querySelector("main.container");

mainContainer.append(headerCreator());
