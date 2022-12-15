"use strict";
export function createProfileAvatarWithName(profileAvatarWithName, json) {
    const createHtml = (profileAvatarWithName.innerHTML += `<div>
                                                        <img class="border-black rounded-full my-auto w-24 h-24" src="${json.avatar}" alt="" onerror="this.src = './images/userPlacegolder.png';">
                                                    </div>
                                                    <h2 class="text-2xl text-fontColor my-auto text-center">${json.name}</h2>`);
    return createHtml;
}
