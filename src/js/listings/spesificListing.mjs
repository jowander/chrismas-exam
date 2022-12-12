"use strict";
import {
    apiCallGetListings,
    optionGet,
} from "../components/apiCall/apiCallGetListings.mjs";
import { createSpesificProfileImage } from "../components/createHtml/createSpesificProfileImage.mjs";
import { createSpesificListingInfo } from "../components/createHtml/createSpesificListingInfo.mjs";
import { countdown } from "../countdown.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const user = localStorage.getItem("userName");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const listingBtn = document.querySelector("#spesific-listing-btn");
const spesificItem = document.querySelector("#item-images");
const spesificListingInfo = document.querySelector("#profile-info");
// const bidTimer = document.querySelector(".countdown");
// const spesificListingBids = document.querySelector("#display-bids");

const json = await apiCallGetListings(
    `${baseUrl}/listings/${id}?_seller=true`,
    optionGet
);

console.log(json.endsAt);
const parsedTime = Date.parse(json.endsAt);
console.log(parsedTime);

createSpesificProfileImage(spesificItem, json);
createSpesificListingInfo(spesificListingInfo, json);
//countdown(showDay, showHour, showMinute, showSecond, listingTime);
setInterval(countdown, 1000, parsedTime);
//spesificItem.innerHTML = "";
const listingsOwner = json.seller.name;

if (user === listingsOwner) {
    listingBtn.classList.contains("listing-btn");
    listingBtn.classList.remove("hidden");
}
