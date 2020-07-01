// Start Change Backgorund Color Component

const changeBgContainer = document.querySelector(".change-bg-container");
const bgColorTitle = document.querySelector(".bg-color-title");
const bgColor = document.querySelector(".bg-color");
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
  bgColorTitle.style.color = hexColor;
  bgColor.textContent = hexColor;
  bgColor.style.color = hexColor;
  changeBgContainer.style.backgroundColor = hexColor;
}

changeBgBtn.addEventListener("click", changeBgColor);

// End Change Backgorund Color Component

// Start Counter Component

const counterValue = document.querySelector(".counter-value");
const counterBtns = document.querySelectorAll(".counter-btn");
let count = 0;

function changeCounterValue(event) {
  if (event.target.innerText === "DECREASE") {
    count = count - 1;
  } else if (event.target.innerText === "INCREASE") {
    count = count + 1;
  } else {
    count = 0;
  }

  if (count < 0) {
    counterValue.style.backgroundColor = "red";
  } else if (count > 0) {
    counterValue.style.backgroundColor = "green";
  } else {
    counterValue.style.backgroundColor = "#ff6663";
  }

  counterValue.innerText = count;
}

counterBtns.forEach(function (btn) {
  btn.addEventListener("click", changeCounterValue);
});

// End Counter Component

// Start Reviews Component

// Data

const reviewItems = [
  {
    id: 1,
    name: "max dell",
    job: "UX designer",
    img: "images/reviews/1.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis sint officiis accusantium a fugiat! Ipsa cumque nemo dolores fugit",
  },
  {
    id: 2,
    name: "john doe",
    job: "web developer",
    img: "images/reviews/2.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis sint officiis accusantium ",
  },
  {
    id: 3,
    name: "kobe byre",
    job: "copywriting",
    img: "images/reviews/3.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, perspiciatis sint officiis accusantium a fugiat! Ipsa cumque nemo ",
  },
  {
    id: 4,
    name: "karole deek",
    job: "digital marketer",
    img: "images/reviews/4.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing  perspiciatis sint officiis accusantium a fugiat! Ipsa cumque nemo dolores fugit",
  },
];

// Variables

const reviewItem = document.querySelector(".review-item");
const reviewImage = document.querySelector(".review-image > img");
const reviewAuthor = document.querySelector(".review-author");
const reviewJob = document.querySelector(".review-job");
const reviewInfo = document.querySelector(".review-info ");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentItem = 0;

// Manipulating Data

function showPerson() {
  const item = reviewItems[currentItem];
  reviewImage.src = item.img;
  reviewAuthor.textContent = item.name;
  reviewJob.textContent = item.job;
  reviewInfo.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

prevButton.addEventListener("click", function () {
  if (currentItem > 0) {
    currentItem--;
  } else {
    currentItem = reviewItems.length - 1;
  }
  showPerson();
});
nextButton.addEventListener("click", function () {
  if (currentItem < reviewItems.length - 1) {
    currentItem++;
  } else {
    currentItem = 0;
  }
  showPerson();
});

// End Reviews Component

// Start Navbar Component

// End Navbar Component
