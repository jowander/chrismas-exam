"use strict";
import { optionGet } from "./components/apiCall/apiCallGetListings.mjs";
import { createMainItemListing } from "./components/createHtml/createMainItemListing.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const searchInput = document.querySelector("#search-input");

console.log(searchInput);

export async function getListingsFromSearch() {
  try {
    const searchInputValue = searchInput.value;
    const itemCard = document.querySelector("#item-card");
    const response = await fetch(`${baseUrl}/listings`, optionGet);
    const json = await response.json();
    itemCard.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      const listingTitles = json[i].title;
      console.log(listingTitles);
      const listingsFiltered = searchInputValue.trim().toLowerCase();

      if (listingTitles.includes(listingsFiltered)) {
        createMainItemListing(itemCard, json[i]);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("Hei");
    getListingsFromSearch();
  }
});
