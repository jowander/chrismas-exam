"use strict";
import {
    apiCallGetListings,
    optionGet,
} from "../components/apiCall/apiCallGetListings.mjs";
import {
    apiCallProfiles,
    optionGetAuth,
} from "../components/apiCall/apiCallGetProfiles.mjs";
import { createMainItemListing } from "../components/createHtml/createMainItemListing.mjs";
import { createProfileAvatar } from "../components/createHtml/createProfileAvatar.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const user = localStorage.getItem("userName");

const itemCard = document.querySelector("#item-card");
const profileAvatar = document.querySelector("#profile-avatar");

const json = await apiCallGetListings(
    `${baseUrl}/listings?limit=20&_active=true`,
    optionGet
);

itemCard.innerHTML = "";
for (let i = 0; i < json.length; i++) {
    const jsonData = json[i];
    if (i <= 9) {
        createMainItemListing(
            itemCard,
            jsonData.media,
            jsonData.title,
            jsonData.id
        );
    }
}

const jsonProfile = await apiCallProfiles(
    `${baseUrl}/profiles/${user}`,
    optionGetAuth
);

const showMore = document.querySelector("#show-more");
showMore.addEventListener("click", () => {
    for (let i = 10; i < json.length; i++) {
        const jsonData = json[i];
        if (i <= 19) {
            createMainItemListing(
                itemCard,
                jsonData.media,
                jsonData.title,
                jsonData.id
            );
            showMore.classList.add("hidden");
        }
    }
});
createProfileAvatar(profileAvatar, jsonProfile);
