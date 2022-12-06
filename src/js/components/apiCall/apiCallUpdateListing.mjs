"use strict"
const baseUrl = "https://api.noroff.dev/api/v1/auction";
const token = localStorage.getItem("accessToken");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function updateListing() {
    try {
        const options = {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            },
            body: {
                
            }
        }
    } catch (error) {
        console.log(error);
    }
}

updateListing()