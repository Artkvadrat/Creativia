"use strict";
function leftClick() {
    if (document.getElementById("whyCreativia").style.backgroundImage == "url(\"images/woman.png\")") {
        document.getElementById("whyCreativia").style.backgroundImage = "url(\"images/woman.png\")";
    } else {
        document.getElementById("whyCreativia").style.backgroundImage = "url(\"images/woman.png\")";
    }
}

function rightClick() {
    if (document.getElementById("whyCreativia").style.backgroundImage == "url(\"images/woman.png\")") {
        document.getElementById("whyCreativia").style.backgroundImage = "url(\"images/woman2.png\")";
    } else {
        document.getElementById("whyCreativia").style.backgroundImage = "url(\"images/woman2.png\")";
    }
}
$(document).ready(function(){
    $('#containerMix').mixItUp();
});
function leftButton() {
    document.getElementById("happyClientsButtonOne").style.backgroundColor = "#ff0036";
    document.getElementById("happyClientsImg").src = "images/HappyClientsOne.png";
    document.getElementById("happyClientsButtonTwo").style.backgroundColor = "#e0e0e0";
    document.getElementById("happyClientsButtonThree").style.backgroundColor = "#e0e0e0";
}
function centerButton() {
    document.getElementById("happyClientsButtonOne").style.backgroundColor = "#e0e0e0";
    document.getElementById("happyClientsImg").src = "images/HappyClientsOne.png";
    document.getElementById("happyClientsButtonTwo").style.backgroundColor = "#ff0036";
    document.getElementById("happyClientsButtonThree").style.backgroundColor = "#e0e0e0";
}
function rightButton() {
    document.getElementById("happyClientsButtonOne").style.backgroundColor = "#e0e0e0";
    document.getElementById("happyClientsImg").src = "images/HappyClientsOne.png";
    document.getElementById("happyClientsButtonTwo").style.backgroundColor = "#e0e0e0";
    document.getElementById("happyClientsButtonThree").style.backgroundColor = "#ff0036";
}
function development() {
    let elem = document.getElementById("development");
    elem.src = "images/developmentWhite.png";
}
function developmentTwo() {
    let elem = document.getElementById("development");
    elem.src = "images/developmentBlack.png";
}
function shtml() {
    document.getElementById("shtml").src = "images/htmlWhite.png";
}
function shtmlTwo() {
    document.getElementById("shtml").src = "images/htmlBlack.png";
}
function wordpress() {
    document.getElementById("wordpress").src = "images/wordpressWhite.png";
}
function wordpressTwo() {
    document.getElementById("wordpress").src = "images/wordpressBlack.png";
}
function application() {
    document.getElementById("application").src = "images/applicationWhite.png";
}
function applicationTwo() {
    document.getElementById("application").src = "images/applicationBlack.png";
}
function design() {
    document.getElementById("design").src = "images/designWhite.png";
}
function designTwo() {
    document.getElementById("design").src = "images/designBlack.png";
}
function layout() {
    document.getElementById("layout").src = "images/layoutWhite.png";
}
function layoutTwo() {
    document.getElementById("layout").src = "images/layoutBlack.png";
}