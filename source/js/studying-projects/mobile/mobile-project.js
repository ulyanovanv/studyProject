/**
 * Created by Anastasiia on 11/21/17.
 */
//var $ = require("../vendor/jquery.min.js");
import $ from '../../vendor/jquery.min.js';

(function(){
    var greyDisplay = $(".hidden-menu__grey-display");
    var firstPage = $(".first-page");
    var secondPage = $(".second-page");
    var hiddenMenu = $(".hidden-menu");

    var missions = $("#mission");
    var mainPage = $("#main-page");



    var firstPageContent = firstPage.children(".first-page-content");
    var firstPageMenuButton = firstPageContent.find(".first-page-content__menu-button");
    console.log(firstPageMenuButton);
    var startButton = firstPageContent.find(".first-page-content__start-button");
    var footerLink = firstPageContent.find(".first-page-content__footer");


    var secondPageContent = secondPage.children(".second-page-content");
    var secondPageMenuButton = secondPageContent.find(".second-page-content__menu-button");



    firstPageMenuButton.on("click",function(){
        console.log("mm");
        HiddenMenuAppering();
        missions.css({"display":"block"});
        mainPage.css({"display":"none"});
    });

    secondPageMenuButton.on("click",function(){
        HiddenMenuAppering();
        missions.css({"display":"none"});
        mainPage.css({"display":"block"});
    });

    startButton.on("click", TurnToSecondPage);

    footerLink.on("click", TurnToSecondPage);

    greyDisplay.on("click",GreyDisplayAppering);


    missions.on("click", function(){
        TurnToSecondPage();
        GreyDisplayAppering()
    });

    mainPage.on("click",function(){
        TurnToFirstPage();
        GreyDisplayAppering();
    })

    function GreyDisplayAppering(){
        greyDisplay.animate({opacity:0},1000, null, function(){
            $(this).css({
                "display":"none"
            });
        });
        hiddenMenu.animate({opacity:0, right: "-=45%"},1000, null, function(){
            $(this).css({
                "display":"none"
            });
        });
    }
    function HiddenMenuAppering(){
        greyDisplay.css({
            "opacity":"0",
            "display":"block"
        }).animate({opacity:0.4});
        hiddenMenu.css({
            "opacity":"0",
            "display":"block"
        }).animate({opacity:1, right: "+=45%"});
    }
    function TurnToSecondPage(){
        firstPage.animate({opacity:0},1000,null,function(){
            $(this).css({display:"none"});
            secondPage.css({"opacity":1}).fadeIn(1000);
        });
    }
    function TurnToFirstPage(){
        secondPage.animate({opacity:0},1000,null,function(){
            $(this).css({display:"none"});
            console.log(firstPage);
            firstPage.css({"opacity":1}).fadeIn(1000);
        });
    }




}())

