"use strict";

// selecting the DOM Objects which would be required
const modal = document.querySelector(".modal");
const crossModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");

// function to Show Modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function to Hide Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// adding listener to all the Show Modal buttons
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}

// adding listener to all the Close Modal options
crossModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
