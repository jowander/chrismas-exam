"use strict";

// "14 Jan 2023" "Jan, 14 2023" "01/14/2023"

export function createDate(date) {
    const offset = new Date().getTimezoneOffset();
    const myDate = Date.parse(date) - offset * 60 * 1000;
    const dateAsIso = new Date(myDate).toISOString();

    return dateAsIso;
}
