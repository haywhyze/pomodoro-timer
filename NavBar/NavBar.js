function navBarCreator() {
  const header = document.createElement("header");
  const pageHeader = document.createElement("h1");

  header.append(pageHeader);

  header.classList.add("navbar");

  pageHeader.textContent = "Lambda Pomodoro Timer";

  return header;
}

const mainContainer = document.querySelector("main");

mainContainer.append(navBarCreator());