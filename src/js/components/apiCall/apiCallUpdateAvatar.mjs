"use strict";
const token = localStorage.getItem("accessToken");
const user = localStorage.getItem("userName");
const baseUrl = "https://api.noroff.dev/api/v1/auction";

export async function editAvatar(e) {
  try {
    e.preventDefault();
    const changeAvatarInput = document.querySelector(
      "#change-avatar-input"
    ).value;
    console.log(changeAvatarInput);
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        avatar: changeAvatarInput,
      }),
    };
    const response = await fetch(`${baseUrl}/profiles/${user}/media`, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("#avatar-form").addEventListener("submit", editAvatar);
