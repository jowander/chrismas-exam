export function createBidInfo(spesificListingBids, bidderName, amount) {
    const createHtml =
        (spesificListingBids.innerHTML += `<div class="card border border-secondaryGreen rounded-lg w-64 mx-auto my-4">  
                                                        <div class="text-center">
                                                            <h2 class="text-xl">Bidder: ${bidderName}</h2>
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="py-2">
                                                                <h2 class="text-lg py-2">Bid: ${amount}</h2>
                                                            </div>
                                                    </div>`);
    return createHtml;
}
