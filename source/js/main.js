import $ from './vendor/jquery.min.js';
//import Modernizr from 'modernizr';
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

if (body.hasClass("todo")){
    require("./studying-projects/todo/todo-app.js");
}

if (body.hasClass("calender")){
    require("./studying-projects/calender/calender-second-version.js");
}

if (body.hasClass("main-in-numbers")){
    require("./studying-projects/game-with-numbers/numbers-game.js");
}


if (body.hasClass("c13")){
    require("./studying-projects/c13/c13.js");
}


if (body.hasClass("mobile")){
    require("./studying-projects/mobile/mobile-project.js");
}

if (body.hasClass("basics")){
    require("./studying-projects/ingredients-choose/main-container.js");
}


if (body.hasClass("calculator")){
    require("./studying-projects/calculator/calculator.js");
}

if (body.hasClass("oughts-crosses")){
    require("./studying-projects/oughts-and-crosses/oughts-and-crosses.js");
}