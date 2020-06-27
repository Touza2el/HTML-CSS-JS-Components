// Start Change Backgorund Color Component

const changeBgContainer = document.querySelector(".change-bg-container");
const bgColor = document.querySelector(".bg-color");
const bgColorTitle = document.querySelector(".bg-color-title");
const changeBgBtn = document.querySelector(".change-bg-btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function changeBgColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  bgColor.textContent = hexColor;
  bgColor.style.color = hexColor;
  bgColorTitle.style.color = hexColor;
  changeBgContainer.style.backgroundColor = hexColor;
  changeBgContainer.style.backgroundColor = hexColor;
}
changeBgBtn.addEventListener("click", changeBgColor);

// End Change Backgorund Color Component
