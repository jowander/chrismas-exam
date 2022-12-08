"use strict";
export function createSpesificProfile(profileInfo, json) {
    const createHtml =
        (profileInfo.innerHTML = `<p class="text-fontColor">Credits: ${json.credits}</p>
                                    <p class="text-fontColor">Actions won: ${json.wins}</p>
                                    <p class="text-fontColor">Listings: ${json._count.listings}</p>`);
    return createHtml;
}
