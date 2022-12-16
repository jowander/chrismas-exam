"use strict";
export function createProfileListing(itemCard, json) {
    const createHtml =
        (itemCard.innerHTML += `<div class="card border border-primaryGreen rounded-lg w-64 mx-8 my-4">  
                                                    <div class="">
                                                        <a href="./spesificItem.html?id=${json.id}"><img class="rounded-t-lg w-64 h-64" src="${json.media}" alt="" onerror="this.src = './../images/userPlacegolder.png';"></a>
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="h-24">
                                                            <h2 class="text-primaryGreen text-xl py-2">${json.title}</h2>
                                                        </div>
                                                        <div class="py-4">
                                                            <a href="./spesificItem.html?id=${json.id}" data-cy="spesific-profile-item" class="rounded-2xl text-fontColor bg-primaryGreen py-1 px-4">Details</a>
                                                        </div>
                                                    </div>
                                                </div>`);
    return createHtml;
}
