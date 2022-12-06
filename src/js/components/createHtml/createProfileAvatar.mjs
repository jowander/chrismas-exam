"use strict"
export function createProfileAvatar(profileAvatar, json) {
    const createHtml = profileAvatar.innerHTML += (`<a href="./spesificProfile.html"><img class="rounded-full w-14 h-14" src="${json.avatar}" alt=""/></a>`);
    return createHtml;
}