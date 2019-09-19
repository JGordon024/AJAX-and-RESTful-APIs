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
        htptRequest = new XMLHttpRequest()
    }
    catch(requestError){
        return false;
    }
    alert(httpRequest);
    return httpRequest;
}

if(window.addEventListener){
    window.addEventListener("load", getRequestObject, false);
}    else if (window.attachEvent){
    window.attachEvent("onload",getRequestObject);
}

function stopSubmission(evt){
    alert("stopSubmission()");
    if(evt.preventDefault){
        evt.preventDefault();
    }else{
        evt.returnValue = false;
    }
}

var form = document.getElementsByTagName("form")[0];
if(form.addEventListener){
    form.addEventListener("submit", stopSubmission, false);
    window.addEventListener("load", getRequestObject,false);
}else if( form.attachEvent){
    form.attachEvent("onsubmit",stopSubmission);
    window.attachEvent("onload",getRequestObject);
}

function getQuote(){
    alert("getQuote()");
    if(document.getElementsByTagName("input")[0].value){
        entry = document.getElementsByTagName("input")[0].value
    }
    if(!httpRequest){
        httpRequest = getRequestObject();
    }
}


