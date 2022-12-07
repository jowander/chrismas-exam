"use strict";
import {
  apiCallProfiles,
  optionGetAuth,
} from "../components/apiCall/apiCallGetProfiles.mjs";
import { createSpesificProfile } from "../components/createHtml/createSpesificProfileInfo.mjs";
import { apiCallGetListings } from "../components/apiCall/apiCallGetListings.mjs";
import { createMainItemListing } from "../components/createHtml/createMainItemListing.mjs";
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
//console.log(json);
createProfileAvatarWithName(profileAvatarWithName, json);
createSpesificProfile(profileInformation, json);

const jsonListings = await apiCallGetListings(
  `${baseUrl}/profiles/${user}/listings`,
  optionGetAuth
);
for (let i = 0; i < jsonListings.length; i++) {
  const jsonData = jsonListings[i];
  createMainItemListing(profileListings, jsonData);
}
