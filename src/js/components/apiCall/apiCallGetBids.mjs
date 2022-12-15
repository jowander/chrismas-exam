"use strict";
import { createBidInfo } from "../createHtml/createBidInfo.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function getBids() {
    try {
        const response = await fetch(`${baseUrl}/listings/${id}?_bids=true`);
        const json = await response.json();
        const spesificListingBids = document.querySelector("#display-bids");

        const data = json.bids;
        data.forEach((bid) => {
            createBidInfo(spesificListingBids, bid.bidderName, bid.amount);
        });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#show-bids-btn").addEventListener("click", getBids);
