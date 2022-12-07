"use strict";
export function createSpesificListingInfo(profileInfo, json) {
    const createHtml = (profileInfo.innerHTML = `<div class="py-2">
                                                        <h2 class="text-lg py-2">${json.title}</h2>
                                                        <p>${json.description}</p>
                                                    </div>
                                                    <div class="">
                                                        <p id="countdown" class="text-xs">Ends: ${json.endsAt}</p>
                                                    </div>`);
    return createHtml;
}
