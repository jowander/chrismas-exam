"use strict"
import { createBidInfo } from "../createHtml/createBidInfo.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const token = localStorage.getItem("accessToken");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id)


async function getBids() {
    try {

        const response = await fetch(`${baseUrl}/listings/${id}?_bids=true`);
        const json = await response.json();
        const spesificListingBids = document.querySelector("#display-bids");
        
        for(let i = 0; i < json.bids.length; i++) {
            const data = json.bids[i];
            createBidInfo(spesificListingBids, json);
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

document.querySelector("#show-bids-btn").addEventListener("click", getBids);