"use strict";
import {
    apiCallProfiles,
    optionGetAuth,
} from "../components/apiCall/apiCallGetProfiles.mjs";
import { createSpesificProfile } from "../components/createHtml/createSpesificProfileInfo.mjs";
import { apiCallGetListings } from "../components/apiCall/apiCallGetListings.mjs";
import { createProfileListing } from "../components/createHtml/createProfileListing.mjs";
import { createProfileAvatarWithName } from "../components/createHtml/createProfileAvatarWithName.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";

const profileInformation = document.querySelector("#user-info");
const profileAvatarWithName = document.querySelector("#profile-avatar-name");
const profileListings = document.querySelector("#item-card");
//console.log(profileInformation);

const user = localStorage.getItem("userName");

const json = await apiCallProfiles(
    `${baseUrl}/profiles/${user}`,
    optionGetAuth
);
console.log(json);

profileListings.innerHTML = "";

createProfileAvatarWithName(profileAvatarWithName, json);
createSpesificProfile(profileInformation, json);

const jsonListings = await apiCallGetListings(
    `${baseUrl}/profiles/${user}/listings`,
    optionGetAuth
);

for (let i = 0; i < jsonListings.length; i++) {
    const jsonData = jsonListings[i];
    createProfileListing(profileListings, jsonData);
}

const numberOfListings = json._count.listings;
console.log(numberOfListings);
if (numberOfListings === 0) {
    profileListings.innerHTML = `<div class="bg-primaryGreen rounded-sm font-bold m-4 p-6 md:mx-auto">
                                    <p class="text-xl text-fontColor">You dont have any listings posted!</p>
                                </div>`;
}
