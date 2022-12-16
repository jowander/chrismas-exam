export function createLatestBid(latestBid, latestBidder, latestBidAmount) {
    const createHtml =
        (latestBid.innerHTML += `<div class="card border border-secondaryGreen rounded-lg w-64 mx-auto my-4">  
                                                        <div class="text-center">
                                                            <h2 class="text-xl">Bidder: ${latestBidder}</h2>
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="py-2">
                                                                <h2 class="text-lg py-2">Bid: ${latestBidAmount}</h2>
                                                            </div>
                                                    </div>`);
    return createHtml;
}
