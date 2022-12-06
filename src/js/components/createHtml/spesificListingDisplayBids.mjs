export function displayBids(bids, json) {
    const createHtml = bids.innerHTML += (`<p>Bids: ${json._count.bids}</p>`);
    return createHtml;
}