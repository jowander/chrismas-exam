"use strict";
const hamburgerMenu = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

function hamburgerToggle() {
    if (navLinks.classList.contains("nav-links")) {
        navLinks.classList.remove("hidden");
    } else {
        navLinks.classList.add("hidden");
    }
}

hamburgerMenu.addEventListener("click", hamburgerToggle);
