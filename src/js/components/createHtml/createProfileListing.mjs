"use strict";
export function createProfileListing(itemCard, json) {
    const createHtml =
        (itemCard.innerHTML += `<div class="card border rounded-lg mx-4 my-8">  
                                                    <div class="">
                                                        <img class=" rounded-t-lg" src="${json.media}" alt="" onerror="this.src = '../../../images/userPlacegolder.png';">
                                                    </div>
                                                    <div class="text-center">
                                                        <div class="py-2">
                                                            <h2 class="text-lg py-2">${json.title}</h2>
                                                        </div>
                                                        <div class="">
                                                            <p class="text-xs">Ends: ${json.endsAt}</p>
                                                        </div>
                                                        <div class="py-4">
                                                            <a href="./spesificItem.html?id=${json.id}" class="rounded-2xl text-fontColor bg-primaryGreen py-1 px-4">Details</a>
                                                        </div>
                                                    </div>
                                                </div>`);
    return createHtml;
}
