"use strict";
const hamburgerMenu = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
    if (navLinks.classList.contains("nav-links")) {
        navLinks.classList.toggle("hidden");
    }
});
