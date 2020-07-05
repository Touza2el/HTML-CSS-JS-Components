// Start Navbar Component

const navbarLinks = document.querySelector(".nav-bar-links");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenuBtn = document.querySelector(".close-mobile-menu-btn");

function toggleMobileMenu() {
  if (!navbarLinks.hasAttribute("id")) {
    navbarLinks.setAttribute("id", "show-mobile-menu");
  } else {
    navbarLinks.removeAttribute("id", "show-mobile-menu");
  }
}
mobileMenu.addEventListener("click", toggleMobileMenu);

closeMobileMenuBtn.addEventListener("click", function () {
  navbarLinks.removeAttribute("id", "show-mobile-menu");
});

// End Navbar Component

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

// Start Modal Component

const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

openModalBtn.addEventListener("click", function () {
  modalOverlay.style.display = "flex";
});
closeModalBtn.addEventListener("click", function () {
  modalOverlay.style.display = "none";
});

// End Modal Component

// Start Questions Coponent

const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const currentQuestion = e.currentTarget.parentElement.parentElement;
    currentQuestion.classList.toggle("show-text");
  });
});

// End Questions Component

// Start Product Filter Component

const productItems = [
  {
    id: 1,
    title: "full bag tools",
    category: "design",
    price: 245,
    img: "./images/products/1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 2,
    title: "new tools",
    category: "coding",
    price: 45,
    img: "./images/products/2.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 3,
    title: "facebook ads",
    category: "marketing",
    price: 99,
    img: "./images/products/3.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 4,
    title: "first product",
    category: "design",
    price: 199,
    img: "./images/products/4.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 5,
    title: "best selling",
    category: "coding",
    price: 149,
    img: "./images/products/5.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 6,
    title: "google ads",
    category: "marketing",
    price: 99,
    img: "./images/products/6.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 7,
    title: "better design",
    category: "design",
    price: 99,
    img: "./images/products/7.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 8,
    title: "web technologies",
    category: "coding",
    price: 99,
    img: "./images/products/8.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 9,
    title: "closing sales",
    category: "sales",
    price: 299,
    img: "./images/products/9.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
  {
    id: 10,
    title: "how to sale",
    category: "sales",
    price: 69,
    img: "./images/products/10.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
    inventore ratione rem obcaecati quod dignissimos beatae
    necessitatibus equi laboriosam doloribus.`,
  },
];
const productFilterContent = document.querySelector(".product-filter-content");
const buttonsContainer = document.querySelector(".product-filter-buttons");

function displayFilterButtons() {
  const categories = productItems.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryButtons = categories
    .map(function (category) {
      return `
    <button class="filter-btn" data-id=${category}>${category}</button>
    `;
    })
    .join("");
  buttonsContainer.innerHTML = categoryButtons;
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const filteredItems = productItems.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });
      if (category === "all") {
        displayItems(productItems);
      } else {
        displayItems(filteredItems);
      }
    });
  });
}

function displayItems(itemsToDisplay) {
  let displayProductItems = itemsToDisplay.map(function (item) {
    return `
    <div class="product-filter-item">
      <div class="product-filter-image">
        <img src=${item.img} alt=${item.title} />
      </div>    
      <div class="product-filter-text">
        <h4 class="product-title">${item.title}</h4>
        <h4 class="product-price">$ ${item.price}</h4>
        <p class="product-description">${item.description}</p>   
      </div>
    </div>
  `;
  });

  displayProductItems = displayProductItems.join("");
  productFilterContent.innerHTML = displayProductItems;
}

window.addEventListener("DOMContentLoaded", function () {
  displayFilterButtons();
  displayItems(productItems);
});

// End Product Filter Component
