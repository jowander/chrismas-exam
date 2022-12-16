"use strict";
export function createMainItemListing(itemCard, media, title, id) {
    const createHtml =
        (itemCard.innerHTML += `<div class="card border border-secondaryGreen rounded-lg w-64 mx-8 my-4">  
                                    <div class="">
                                        <a href="./src/spesificItem.html?id=${id}"><img class="rounded-t-lg w-64 h-64" src="${media}" alt="" onerror="this.src = './images/userPlacegolder.png';"></a>
                                    </div>
                                    <div class="text-center">
                                        <div class="h-24">
                                            <h2 class="text-primaryGreen text-xl py-2">${title}</h2>
                                        </div>
                                        <div class="py-4">
                                            <a href="./src/spesificItem.html?id=${id}" class="rounded-2xl text-fontColor bg-primaryGreen py-1 px-4">Details</a>
                                        </div>
                                    </div>
                                </div>`);
    return createHtml;
}
