"use scrict";
const baseUrl = "https://api.noroff.dev/api/v1/auction";
const token = localStorage.getItem("accessToken");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const modalInput = document.querySelector("#bid");

async function placeBid(e) {
    try {
        e.preventDefault();
        const bidInput = document.querySelector("#bid").value;
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                amount: parseInt(bidInput),
            }),
        };
        const response = await fetch(
            `${baseUrl}/listings/${id}/bids?sortOrder=desc`,
            options
        );
        const json = await response.json();
        if (response.ok) {
            window.location.reload();
        } else {
            modalInput.style = "bg-red-500";
        }

        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#bid-form").addEventListener("submit", placeBid);
