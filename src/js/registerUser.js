"use strict";
const baseUrl = "https://api.noroff.dev/api/v1/auction";

async function registerUser(e) {
    e.preventDefault();
    try {
        const userName = document.querySelector("#user-name").value;
        const userEmail = document.querySelector("#user-email").value;
        const userPassword = document.querySelector("#user-password").value;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword,
            }),
        };
        const response = await fetch(`${baseUrl}/auth/register`, options);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    } finally {
        window.location.href = "./login.html";
    }
}

document
    .querySelector("#register-form")
    .addEventListener("submit", registerUser);
