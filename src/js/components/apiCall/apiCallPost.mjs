"use strict";
import { createDate } from "./../../timeFormat.mjs";

const baseUrl = "https://api.noroff.dev/api/v1/auction";
const token = localStorage.getItem("accessToken");

export async function addPost(e) {
    try {
        e.preventDefault();
        const title = document.querySelector("#bid-item-title").value;
        const bidEnd = document.querySelector("#bid-item-end").value;
        const dateFormatting = createDate(bidEnd);
        console.log(dateFormatting);
        const listingsPicture = document.querySelector("#bid-item-media").value;
        const description = document.querySelector(
            "#bid-item-description"
        ).value;
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: title,
                media: [listingsPicture],
                description: description,
                endsAt: bidEnd,
            }),
        };

        const response = await fetch(`${baseUrl}/listings`, options);
        //const json = await response.json();
        if (response.ok) {
            window.location.reload();
        } else {
            document.querySelector(".postTitle").classList.remove("hidden");
            document.querySelector(".postMedia").classList.remove("hidden");
            document.querySelector(".postDate").classList.remove("hidden");
        }
    } catch (error) {
        document.querySelector(".postTitle").classList.remove("hidden");
        document.querySelector(".postMedia").classList.remove("hidden");
        document.querySelector(".postDate").classList.remove("hidden");
        console.log(error);
    }
}

document.querySelector("#post-form").addEventListener("submit", addPost);
