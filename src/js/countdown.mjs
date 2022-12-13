"use strict";
// import {
//     apiCallGetListings,
//     optionGet,
// } from "./components/apiCall/apiCallGetListings.mjs";

// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const baseUrl = "https://api.noroff.dev/api/v1/auction";

// const json = await apiCallGetListings(
//     `${baseUrl}/listings/${id}?_seller=true`,
//     optionGet
// );

// console.log(json);
// console.log(json.endsAt);
// const parsedTime = json.endsAt;
// console.log(parsedTime);

export function countdown(bidEnd) {
    const endTime = Date.parse(bidEnd);
    console.log(endTime);

    const countDate = new Date().getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(gap);

    const showDay = (document.querySelector(".day").innerText = textDay);
    const showHour = (document.querySelector(".hour").innerText = textHour);
    const showMinute = (document.querySelector(".minute").innerText =
        textMinute);
    const showSecond = (document.querySelector(".second").innerText =
        textSecond);

    return { showDay, showHour, showMinute, showSecond };
}

setInterval(countdown, 1000);
