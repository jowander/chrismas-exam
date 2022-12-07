"use strict";
import { optionGetAuth } from "./components/apiCall/apiCallGetListings.mjs";
import { createMainItemListing } from "./components/createHtml/createMainItemListing.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const user = localStorage.getItem("userName");

const searchProfileInput = document.querySelector("#search-input-profile");

export async function getProfileListingsFromSearch() {
    try {
        const searchInputValue = searchProfileInput.value;
        console.log(searchInputValue);
        const itemCard = document.querySelector("#item-card");
        const response = await fetch(
            `${baseUrl}/profiles/${user}/listings`,
            optionGetAuth
        );
        const json = await response.json();
        console.log(json);
        itemCard.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            const listingTitles = json[i].title;
            const lowerCaseTitles = listingTitles.trim().toLowerCase();
            const listingsFiltered = searchInputValue.trim().toLowerCase();
            console.log(listingsFiltered);

            if (lowerCaseTitles.includes(listingsFiltered)) {
                console.log("hallo");
                createMainItemListing(itemCard, json[i]);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

searchProfileInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getProfileListingsFromSearch();
    }
});
