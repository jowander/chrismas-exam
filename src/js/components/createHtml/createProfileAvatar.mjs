"use strict";
export function createProfileAvatar(profileAvatar, json) {
    const createHtml =

        (profileAvatar.innerHTML += `<a href="./src/spesificProfile.html"><img class="rounded-full mx-4 w-10 h-10" src="${json.avatar}" alt="Profile avatar" onerror="this.src = './images/userPlacegolder.png';"/></a>`);

    return createHtml;
}
