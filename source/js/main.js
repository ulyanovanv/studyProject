import $ from './vendor/jquery.min.js';
//var $ = require("./vendor/jquery.min.js");

/**
 * Created by Anastasya on 13.08.17.
 */
//$(document).ready(function(){
//    $("div:nth-child(2)").on("click",function(){
//        $(this).animate({width:"+=100px"},1000);
//    })
//})

let body = $("body");


if (body.hasClass("calender")){
    require("./studying-projects/calender-second-version.js");
}

if (body.hasClass("main-in-numbers")){
    require("./studying-projects/numbers-game.js");
}


if (body.hasClass("c13")){
    require("./studying-projects/c13/c13.js");
}


if (body.hasClass("mobile")){
    require("./studying-projects/mobile/mobile-project.js");
}