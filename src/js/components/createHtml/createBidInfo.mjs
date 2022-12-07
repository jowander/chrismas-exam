export function createBidInfo(spesificListingBids, bidderName, amount) {
    const createHtml =
        (spesificListingBids.innerHTML += `<div class="card border rounded-lg mx-4 my-8">  
                                                        <div class="">
                                                            <h2>${bidderName}</h2>
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="py-2">
                                                                <h2 class="text-lg py-2">${amount}</h2>
                                                            </div>
                                                    </div>`);
    return createHtml;
}
