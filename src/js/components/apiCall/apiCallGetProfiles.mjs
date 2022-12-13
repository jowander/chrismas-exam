"use strict";
export async function apiCallProfiles(baseUrl, headers) {
    try {
        const response = await fetch(baseUrl, headers);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}

const token = localStorage.getItem("accessToken");

export const optionGetAuth = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${token}`,
    },
};
