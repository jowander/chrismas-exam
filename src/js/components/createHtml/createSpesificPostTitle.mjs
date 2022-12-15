"use strict";
export function createSpesificPostTitle(postTitle, json) {
    const createHtml = (postTitle.innerHTML = `<div class="py-2">
                                                        <h2 class="rounded-sm text-2xl underline text-primaryGreen text-center uppercase font-bold py-2">${json.title}</h2>
                                                    </div>`);
    return createHtml;
}
