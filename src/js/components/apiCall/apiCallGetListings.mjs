"use strict";
export async function apiCallGetListings(baseUrl, headers) {
  try {
    const response = await fetch(baseUrl, headers);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export const optionGet = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
};

const token = localStorage.getItem("accessToken");

export const optionGetAuth = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
