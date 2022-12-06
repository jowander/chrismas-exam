"use strict"
import { apiCallGetListings, optionGet } from "../components/apiCall/apiCallGetListings.mjs";
import { apiCallProfiles, optionGetAuth } from "../components/apiCall/apiCallGetProfiles.mjs";
import { createMainItemListing } from "../components/createHtml/createMainItemListing.mjs";
import { createProfileAvatar } from "../components/createHtml/createProfileAvatar.mjs"; 

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const user = localStorage.getItem("userName");

const itemCard = document.querySelector("#item-card");
const profileAvatar = document.querySelector("#profile-avatar");

const json = await apiCallGetListings(`${baseUrl}/listings`, optionGet);
for(let i = 0; i < json.length; i++) {
    const jsonData = json[i];
    if(i <= 9) {
        itemCard.innerHTML = "";
        createMainItemListing(itemCard, jsonData);
    } 
}

const jsonProfile = await apiCallProfiles(`${baseUrl}/profiles/${user}`, optionGetAuth);
console.log(jsonProfile);
document.querySelector("#show-more").addEventListener("click", createMainItemListing);
createProfileAvatar(profileAvatar, jsonProfile);