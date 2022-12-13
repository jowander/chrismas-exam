"use strict";
export function createProfileAvatar(profileAvatar, json) {
    const createHtml =
        (profileAvatar.innerHTML += `<a href="./src/spesificProfile.html"><img class="rounded-full w-10 h-10" src="${json.avatar}" alt="${json.seller.name}" onerror="this.src = '../../../images/userPlacegolder.png';"/></a>`);
    return createHtml;
}
