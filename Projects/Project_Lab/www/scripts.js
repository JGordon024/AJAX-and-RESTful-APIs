/*  Project 01_11_02

    Author: 
    Date:   

    Filename: script.js
*/

"use strict";
var httpRequest = false;
var entry = "IXIC";

function getRequestObject(){
    try{
        httpRequest = new XMLHttpRequest()
    }
    catch(requestError){
        return false;
    }
    return httpRequest;
}

if(window.addEventListener){
    window.addEventListener("load", getRequestObject, false);
}    else if (window.attachEvent){
    window.attachEvent("onload",getRequestObject);
}

function stopSubmission(evt){
    if(evt.preventDefault){
        evt.preventDefault();
    }else{
        evt.returnValue = false;
    }
    getQuote();
}

var form = document.getElementsByTagName("form")[0];
if(form.addEventListener){
    form.addEventListener("submit", stopSubmission, false);
    window.addEventListener("load", getQuote,false);
}else if( form.attachEvent){
    form.attachEvent("onsubmit",stopSubmission);
    window.attachEvent("onload",getQuote);
}

function getQuote(){
    if(document.getElementsByTagName("input")[0].value){
        entry = document.getElementsByTagName("input")[0].value
    }
    if(!httpRequest){
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "StockCheck.php?t=" + entry, true);
    httpRequest.send(null);
    httpRequest.onreadystatechange = displayData;
}


function displayData() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        var stockResults = httpRequest.responseText;
        var stockItems = stockResults.split(/,|\"/);
        for(var i = stockItems.length -1; i >=0; i--){
            if(stockItems[i]=== ""){
                stockItems.splice(i,1);
            }
        }
        document.getElementById("ticker").innerHTML = stockItems[0];
        console.log(stockItems);
    }
}
