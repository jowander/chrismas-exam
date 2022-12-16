export function createLatestBid(latestBid, latestBidder, latestBidAmount) {
    const createHtml =
        (latestBid.innerHTML += `<div class="card border border-secondaryGreen rounded-lg w-64 mx-auto my-4">
                                                        <h2 class="text-2xl my-2">Latest Bid</h2>
                                                        <div class="text-center">
                                                            <h2 class="text-xl">${latestBidder}</h2>
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="py-2">
                                                                <h2 class="text-lg py-2">Bid: ${latestBidAmount}</h2>
                                                            </div>
                                                    </div>`);
    return createHtml;
}
