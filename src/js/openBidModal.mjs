"use strict";
const bidModalBtn = document.querySelector("#bid-btn");
const bidModalOpen = document.querySelector(".open-bid-modal");

bidModalBtn.addEventListener("click", () => {
    bidModalOpen.classList.contains("open-bid-modal");
    bidModalOpen.classList.remove("hidden");
});
