import React from "react";

let host = window.location.host;
let protocol = window.location.protocol;
let parts = host.split(".");
let subdomain = "";
// If we get more than 3 parts, then we have a subdomain
// INFO: This could be 4, if you have a co.uk TLD or something like that.
if (parts.length >= 3) {
  // subdomain = parts[0];
  subdomain = 'dealer-website';
  // Remove the subdomain from the parts list
  // parts.splice(0, 1);
  // Set the location to the new url
  // window.location = protocol + "//" + parts.join(".") + "/" + subdomain;
}else {
  subdomain = 'dealer-website';
}

export const API_CONSTANTS = {
    BASE_URL: `https://${subdomain+"."}primarykeytech.in/dynamic/api/api`, //'https://primarykeytech.in/glocal/api',
    login: "/login", //used
    refresh: "/refresh",
    setupList: "/setup/list",



    subdomain: `${subdomain}`,
}