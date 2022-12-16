"use strict";
const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const backBtnModal = document.querySelector("#back-bid-btn-modal");
const modal = document.querySelector("#bid-modal");
console.log(modal);

function navToggle() {
    btn.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

function toggleModal() {
    modal.classList.toggle("hidden");
}

btn.addEventListener("click", navToggle);
backBtnModal.addEventListener("click", toggleModal);
