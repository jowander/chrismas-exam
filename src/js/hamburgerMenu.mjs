"use strict";
const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

btn.addEventListener("click", navToggle);
