import React from "react";

let host = window.location.host;
let protocol = window.location.protocol;
let parts = host.split(".");
var subdomain = "";
var domain = 'aitechiez'
var point = 'com'

var uniqueCode = 'aitechiez';
var url = '';
url = window.location.host;
if(host.search('127.0.0')){
  url = `https://${domain}.${point}`;
} else if(host.search('localhost')){
  url = `https://${domain}.${point}`;
}

// If we get more than 3 parts, then we have a subdomain
// INFO: This could be 4, if you have a co.uk TLD or something like that.
if (parts.length === 4) {
  if( parts[0] === 'www'){
    subdomain = parts[1];
    domain = parts[2];
    point = parts[3];
  } else {
    subdomain = parts[1];
    domain = parts[2];
    point = parts[3];
  }
  uniqueCode = subdomain;
} else if (parts.length === 3) {
  if( parts[0] === 'www'){
    subdomain = '';
    domain = parts[1];
    point = parts[2];
    uniqueCode = domain;
  } else {
    subdomain = parts[0];
    domain = parts[1];
    point = parts[2];
    uniqueCode = subdomain;
  }
} else if(parts.length == 2){
  subdomain = '';
  domain = parts[0];
  point =  parts[1];
  uniqueCode = domain;
} 

// BASE_URL: `http://127.0.0.1:8003/api`, //'https://primarykeytech.in/glocal/api',
export const API_CONSTANTS = {
  BASE_URL: `${url}/api/api`, //'https://primarykeytech.in/glocal/api',
  URL:`${url}/api`,
    login: "/login", //used
    refresh: "/refresh",
    setupList: "/setup/list",
    subdomain: `${uniqueCode}`,
}