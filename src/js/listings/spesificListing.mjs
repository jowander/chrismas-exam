"use strict";
import {
    apiCallGetListings,
    optionGet,
} from "../components/apiCall/apiCallGetListings.mjs";
import { createSpesificProfileImage } from "../components/createHtml/createSpesificProfileImage.mjs";
import { createSpesificListingInfo } from "../components/createHtml/createSpesificListingInfo.mjs";
import { createSpesificPostTitle } from "../components/createHtml/createSpesificPostTitle.mjs";
import { createLatestBid } from "../components/createHtml/createLatestBid.mjs";

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
const latestBidContainer = document.querySelector("#latestBid");

const json = await apiCallGetListings(
    `${baseUrl}/listings/${id}?_seller=true&_bids=true`,
    optionGet
);

console.log(json.bids);
const parsedTime = Date.parse(json.endsAt);
console.log(parsedTime);

const latestBidArray = json.bids;
const latestBid = latestBidArray.slice(-1);
const latestBidder = latestBidArray[0].bidderName;
const latestBidAmount = latestBid[0].amount;
console.log(latestBid[0].amount);

sessionStorage.setItem("bidEnd", json.endsAt);

createSpesificPostTitle(postTitle, json);
createSpesificProfileImage(spesificItem, json);
createSpesificListingInfo(spesificListingInfo, json);
createLatestBid(latestBidContainer, latestBidder, latestBidAmount);

const listingsOwner = json.seller.name;

if (user === listingsOwner) {
    listingBtn.classList.contains("listing-btn");
    listingBtn.classList.remove("hidden");
    bidBtn.classList.add("hidden");
}
