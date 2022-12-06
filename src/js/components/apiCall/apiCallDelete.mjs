"use strict"
const baseUrl = "https://api.noroff.dev/api/v1/auction";
const token = localStorage.getItem("accessToken");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function deleteListing() {
    try {
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        const response = await fetch(`${baseUrl}/listings/${id}`, options);
        console.log(response);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error)
    } finally {
        window.location.href = "./spesificProfile.html";
    }
}

document.querySelector("#delete-btn").addEventListener("click", deleteListing)