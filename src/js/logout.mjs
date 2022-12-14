"use strict";
const logoutBtn = document.querySelector("#logout-btn");
const user = localStorage.getItem("userName");

logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

if (user) {
    logoutBtn.innerHTML = `<button id="logout-btn" class="bg-primaryGreen p-1 rounded-sm text-fontColor">Logout</button>`;
} else {
    logoutBtn.innerHTML = `<a href="./src/login.html" id="logout-btn" class="bg-primaryGreen p-1 rounded-sm text-fontColor">Login</a>`;
}
