/**
 * Created by Anastasiia on 9/26/17.
 */

import $ from '../../vendor/jquery.min.js';

$(document).ready(function(){
   $("#beginning-button").on("click",function(){
       $("#first").hide();
       $("#second").show();
   })
});

var counter = 1;
var seconds = 10;
const colors = ["#61b861","#ec8b68","#d7666b","#403c3b","#0077cc","#003580","#78052d"];

function createNumbers() {
   for (var i = 1; i < 10; i++) {
       var num = Math.ceil(Math.random() * 9);
       var currentCell = $("#c" + num);
       var col = Math.ceil(Math.random() * 7);
       currentCell.css({color:colors[col]});
       if (currentCell.text()) {
           i = i-1;
       } else {
           currentCell.text(i);
       }
   }
}


$(function(){
    $(".cell").on("click",function() {
        if ($(this).text() == counter) {
            $(this).removeClass("initial-color").addClass("red");
            counter++;
        }
        var cells = document.getElementsByClassName("cell");
        for (var j = 0; j < 9; j++) {
            var cc = $(cells[j]);
            if (cc.hasClass("red") === false) {
                break;
            }
            if (cc.hasClass("red") && j === 8) {
                $("#time-left").html("Вы выиграли");
            }
        }
     })
});



function timer() {
    var intervalId = setInterval(function(){
        seconds--;
        if (seconds < 0) {
            $("#time-left").html("Вы проиграли");
            counter=10;
            clearInterval(intervalId);
            return;
        }
        if (counter==10) {
            clearInterval(intervalId);
            return;
        }
        $("#seconds").text(seconds);
    }, 1000)
}

function gameReset() {
    const cell = $(".cell");
    cell.text("");
    createNumbers();
    counter = 1;
    cell.removeClass("red").addClass("initial-color");
    $("#time-left").html("Времени осталось:" + "<span id='seconds'>10</span>");
    timer();
    seconds = 10;
}



$(function(){
    $("#new-game").on("click", gameReset);
    $("#beginning-button").on("click", gameReset);
});
