function mainCreator() {
  const main = document.createElement("main");

  main.classList.add("container");

  return main;
}

const body = document.querySelector('body');

body.append(mainCreator())