"use strict";
const backBtnModal = document.querySelector("#back-bid-btn-modal");
const modal = document.querySelector("#bid-modal");

function toggleModal() {
    modal.classList.toggle("hidden");
}

backBtnModal.addEventListener("click", toggleModal);
