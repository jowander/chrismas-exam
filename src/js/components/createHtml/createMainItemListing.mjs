"use strict";
export function createMainItemListing(itemCard, media, title, id) {
    const createHtml =
        (itemCard.innerHTML += `<div class="card border rounded-lg mx-4 my-8">  
                                    <div class="">
                                        <img class="rounded-t-lg" src="${media}" alt="" onerror="this.src = '../../../images/userPlacegolder.png';">
                                    </div>
                                    <div class="text-center">
                                        <div class="py-2">
                                            <h2 class="text-primaryGreen text-xl py-2">${title}</h2>
                                        </div>
                                        <div class="py-4">
                                            <a href="./src/spesificItem.html?id=${id}" class="rounded-2xl text-fontColor bg-primaryGreen py-1 px-4">Details</a>
                                        </div>
                                    </div>
                                </div>`);
    return createHtml;
}
