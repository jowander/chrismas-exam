"use strict";
export function createSpesificListingInfo(profileInfo, json) {
    const createHtml = (profileInfo.innerHTML = `<div class="py-2">
                                                        <p>${json.description}</p>
                                                    </div>`);
    return createHtml;
}
