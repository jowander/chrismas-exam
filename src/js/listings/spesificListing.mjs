"use strict";
import {
    apiCallGetListings,
    optionGet,
} from "../components/apiCall/apiCallGetListings.mjs";
import { createSpesificProfileImage } from "../components/createHtml/createSpesificProfileImage.mjs";
import { createSpesificListingInfo } from "../components/createHtml/createSpesificListingInfo.mjs";
import { createSpesificPostTitle } from "../components/createHtml/createSpesificPostTitle.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const user = localStorage.getItem("userName");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const listingBtn = document.querySelector("#spesific-listing-btn");
const spesificItem = document.querySelector("#item-images");
const spesificListingInfo = document.querySelector("#profile-info");
const bidBtn = document.querySelector("#bid-btn");
const postTitle = document.querySelector("#post-title");

const json = await apiCallGetListings(
    `${baseUrl}/listings/${id}?_seller=true`,
    optionGet
);

console.log(json);
const parsedTime = Date.parse(json.endsAt);
console.log(parsedTime);

sessionStorage.setItem("bidEnd", json.endsAt);

createSpesificPostTitle(postTitle, json);
createSpesificProfileImage(spesificItem, json);
createSpesificListingInfo(spesificListingInfo, json);

const listingsOwner = json.seller.name;

if (user === listingsOwner) {
    listingBtn.classList.contains("listing-btn");
    listingBtn.classList.remove("hidden");
    bidBtn.classList.add("hidden");
}
