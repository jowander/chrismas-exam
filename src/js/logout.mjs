"use strict";
const logoutBtn = document.querySelector("#logout-btn");
const user = localStorage.getItem("userName");

logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.reload();
});

if (user) {
    logoutBtn.innerHTML = `<button id="logout-btn" class="bg-yellow-500 font-bold p-2 rounded-sm text-primaryGreen">Logout</button>`;
} else {
    logoutBtn.innerHTML = `<a href="./src/login.html" id="logout-btn" class="font-bold bg-primaryGreen p-2 rounded-sm text-fontColor">Login</a>`;
}
