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
}

changeBgBtn.addEventListener("click", changeBgColor);

// End Change Backgorund Color Component

// Start Counter Component

const counterValue = document.querySelector(".counter-value");
const counterBtns = document.querySelectorAll(".counter-btn");
let count = 0;

counterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.target.innerText === "DECREASE") {
      count = count - 1;
    } else if (event.target.innerText === "RESET") {
      count = 0;
    } else if (event.target.innerText === "INCREASE") {
      count = count + 1;
    }

    counterValue.innerText = count;

    if (count < 0) {
      counterValue.style.backgroundColor = "red";
    } else if (count > 0) {
      counterValue.style.backgroundColor = "green";
    } else {
      counterValue.style.backgroundColor = "#ff6663";
    }
  });
});

// End Counter Component
