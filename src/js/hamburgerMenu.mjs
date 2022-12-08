"use strict";
const hamburgerMenu = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".relative");
console.log(hamburger);

hamburgerMenu.addEventListener("click", () => {
    console.log(hamburger);
    navLinks.classList.toggle("hidden");
});
