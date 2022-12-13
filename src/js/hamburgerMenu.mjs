"use strict";
const hamburgerMenu = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");
console.log(navLinks);

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    console.log("click");
});
