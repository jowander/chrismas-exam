export function createBidInfo(spesificListingBids, json) {
    for(let i = 0; i < json.bids.length; i++) {
        const createHtml = (spesificListingBids.innerHTML += `<div class="card border rounded-lg mx-4 my-8">  
                                                        <div class="">
                                                            <h2>${json.bids[i].bidderName}</h2>
                                                        </div>
                                                        <div class="text-center">
                                                            <div class="py-2">
                                                                <h2 class="text-lg py-2">${json.bids[i].amount}</h2>
                                                            </div>
                                                    </div>`);
        return createHtml;
    }
}