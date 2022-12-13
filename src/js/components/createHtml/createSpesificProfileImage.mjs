"use strict";
export function createSpesificProfileImage(spesificImage, json) {
    const createHtml = (spesificImage.innerHTML = `<div class="relative">
                                                        <a href="./spesificProfile.html"><img class="absolute rounded-full right-2 top-2 w-14 h-14" src="${json.seller.avatar}" alt="" onerror="this.src = '../../../images/userPlacegolder.png';"/></a>
                                                        <img class="rounded-t-lg" src="${json.media}" alt="" onerror="this.src = '../../../images/userPlacegolder.png';">
                                                    </div>`);
    return createHtml;
}
