// Toggle Menu
const iconToggle = document.querySelector(".icon-toggle");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

iconToggle.addEventListener("click", () => {
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});

// Slider
const slides = document.querySelectorAll(".slide");
const desktopSlides = document.querySelectorAll(".desktop-slide");
const nextArrows = document.querySelectorAll(".arrow-right");
const prevArrows = document.querySelectorAll(".arrow-left");

let currentSlide = 0;

function hideAllSlides(slides) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
}

function showSlide(slides, index) {
  hideAllSlides(slides);
  slides[index].style.display = "block";
}

function nextSlide(slides, currentIndex) {
  currentSlide = (currentIndex + 1) % slides.length;
  showSlide(slides, currentSlide);
}

function prevSlide(slides, currentIndex) {
  currentSlide = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(slides, currentSlide);
}

function initializeSlides(slides) {
  hideAllSlides(slides);
  showSlide(slides, 0);
}

nextArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    nextSlide(slides, currentSlide);
    nextSlide(desktopSlides, currentSlide);
  });
});

prevArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    prevSlide(slides, currentSlide);
    prevSlide(desktopSlides, currentSlide);
  });
});

initializeSlides(slides);
initializeSlides(desktopSlides);

// Counter
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const countDisplay = document.querySelector(".count");
let count = 0;

plusBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

// Cart
const iconCart = document.querySelector(".icon-cart");
const cartCount = document.querySelector(".icon-cart-count");
const cartOrder = document.querySelector(".cart-order");
const addedCart = document.querySelector(".added-cart");
const emptyCart = document.querySelector(".empty-cart");
const deleteBtn = document.querySelector(".delete");
const checkoutBtn = document.querySelector(".checkout-btn");

iconCart.addEventListener("click", () => {
  cartOrder.classList.toggle("show");
});

const addToCartBtn = document.querySelector("#form");

addToCartBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (count === 0) {
    alert("Add item to cart");
  } else {
    emptyCart.style.display = "none";
    addedCart.style.display = "block";
    cartCount.style.display = "block";
    cartCount.textContent = count;
  }
});

deleteBtn.addEventListener("click", () => {
  emptyCart.style.display = "block";
  addedCart.style.display = "none";
  cartCount.style.display = "none";
  count = 0;
  countDisplay.textContent = count;
});

checkoutBtn.addEventListener("click", () => {
  addedCart.style.display = "none";
  emptyCart.style.display = "block";
  cartCount.style.display = "none";
  count = 0;
  countDisplay.textContent = count;
});

// Desktop Sneakers
const mainSneaker = document.querySelector(".main-sneaker");
const desktopSlider = document.querySelector(".desktop-slider");
const deleteIcon = document.querySelector(".icon-delete");

mainSneaker.addEventListener("click", () => {
  desktopSlider.style.display = "block";
});

deleteIcon.addEventListener("click", () => {
  desktopSlider.style.display = "none";
});

// Desktop Sneakers Slider
const thumbnails = document.querySelectorAll(".s_sneaker");
const sneakerList = document.querySelector(".sneaker-list-desktop-content");
const mainSlider = document.querySelector(".main-sneaker-slider");

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    const percentage = -25 * index;
    mainSlider.style.transform = `translate(${percentage}%)`;
    sneakerList.style.transform = `translate(${percentage}%)`;
  });
});
