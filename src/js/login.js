"use strict";
const url = "https://api.noroff.dev/api/v1/auction/auth/login";

const userEmail = document.querySelector("#email");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const enterWithoutLogin = document.querySelector("#without-login-btn");
console.log(enterWithoutLogin);

enterWithoutLogin.addEventListener("click", () => {
    localStorage.clear();
});

loginForm.addEventListener("submit", handleLogin);

async function handleLogin(e) {
    e.preventDefault();

    const userLogin = {
        email: userEmail.value,
        password: password.value,
    };
    const response = await logIn(url, userLogin);
    if (response.status === 200) {
        window.location.href = "./index.html";
    }
}

async function logIn(url) {
    const userLogin = {
        email: `${userEmail.value}`,
        password: `${password.value}`,
    };
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLogin),
        };

        const response = await fetch(url, postData);
        const jsonResponse = await response.json();
        const userName = jsonResponse.name;
        const accessToken = jsonResponse.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);

        return response;
    } catch (error) {
        console.log(error);
    }
}
