/*  Project 01_11_04

    Author: 
    Date:   

    Filename: script.js
*/

"use strict";
var httpRequest = false;

var zip = document.getElementById("zip");
if (zip.addEventListener){
    zip.addEventListener("keyup", checkInput, false);
}else if (zip.attachEvent){
    zip.attachEvent("onkeyup", checkInput);
}

function checkInput(){
    alert("checkInput()");
// var zip = document.getElementById("zip").value;
// if(zip.length === 5){
//     getLocation()
// }
// else {
//     document.getElementById("city").value = "";
//     document.getElementById("state").value = "";
// }
}

