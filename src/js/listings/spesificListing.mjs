"use strict";
import {
    apiCallGetListings,
    optionGet,
} from "../components/apiCall/apiCallGetListings.mjs";
import { createSpesificProfileImage } from "../components/createHtml/createSpesificProfileImage.mjs";
import { createSpesificListingInfo } from "../components/createHtml/createSpesificListingInfo.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const user = localStorage.getItem("userName");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const listingBtn = document.querySelector("#spesific-listing-btn");
const spesificItem = document.querySelector("#item-images");
const spesificListingInfo = document.querySelector("#profile-info");
// const spesificListingBids = document.querySelector("#display-bids");

const json = await apiCallGetListings(
    `${baseUrl}/listings/${id}?_seller=true`,
    optionGet
);

console.log(json.endsAt);
const parsedTime = Date.parse(json.endsAt);
console.log(parsedTime);

// const showDay = document.querySelector(".day");
// const showHour = document.querySelector(".hour");
// const showMinute = document.querySelector(".minute");
// const showSecond = document.querySelector(".second");
sessionStorage.setItem("bidEnd", json.endsAt);

createSpesificProfileImage(spesificItem, json);
createSpesificListingInfo(spesificListingInfo, json);
// setInterval(countdown(json.endsAt), 1000);
//spesificItem.innerHTML = "";
const listingsOwner = json.seller.name;

if (user === listingsOwner) {
    listingBtn.classList.contains("listing-btn");
    listingBtn.classList.remove("hidden");
}
