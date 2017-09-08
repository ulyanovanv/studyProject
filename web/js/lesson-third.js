/**
 * Created by Anastasya on 07.09.17.
 */

var intervalId = 0;
var number = 1;
var seconds = 10;
$("#time span").text(seconds);
const COLORS_ARRAY = ["#61b861","#ec8b68","#d7666b","#0077cc","#001b42","#78052d","#7ac914","#f0f02b","#ff3c00"];
const FONT_SIZES= ["1em","1.5em","2em","2.5em","3em"];

function randomizeNumbers(){
    var numbers = [];
    var elements = $(".element");
    for (var i=1;i<=elements.length;i++) {
        numbers.push(i);
    }
    var length = numbers.length;
//    var colorsLength = COLORS_ARRAY.length;
    for(var j = 1; j <= length; j++){
        var random = Math.floor(Math.random()*numbers.length);
        // console.log(numbers);
        var number = numbers[random];
        // console.log(number, j);
        var element = $("#c"+number);
        element.text(j);
        var colorsRandomNumber = Math.floor(Math.random()*COLORS_ARRAY.length);
        var colorToUSse = COLORS_ARRAY[colorsRandomNumber];

        var fontSizeRandom = Math.floor(Math.random()*FONT_SIZES.length);
        var fontSizeToUse = FONT_SIZES[fontSizeRandom];
        element.css({color: colorToUSse, "font-size": fontSizeToUse});
        numbers.splice(random, 1);
    }
}

function clean(){
    var els = $(".element");
    for (var i=0;i<els.length;i++) {
        els.eq(i).text('');
        els.eq(i).removeClass("red");
        els.eq(i).css({color:"Black"});
    }
    number = 1;
    $("#time").html("Времени осталось:<span></span>");
    newGame();
}

$(document).ready(function(){
    $("#start button").on("click",function(){
        $("#start").hide();
        $("#follow").show();
        randomizeNumbers();
        intervalId = setInterval(timer,1000);
    })
})


$(document).ready(function(){
    $("#create-new-game button").on("click",function(){
        clean();
        randomizeNumbers();
    })
})



$(function(){
    var el=$(".element");
    el.on("click",function(){
        if (seconds == 0) {
            return;
        }
        if ($(this).text() == number){
            if (number==9){
                $(this).addClass("red");
                $("#time").text("Вы выиграли");
                number = 1;
                clearInterval(intervalId);
                return;
            }
            $(this).addClass("red");
            number ++;
        }
    })
})




function timer(){
    seconds --;
    console.log(seconds);
    $("#time span").text(seconds);
    if (seconds === 0){
        clearInterval(intervalId);
        $("#time").html("You lost");
    }
}


function newGame(){
    seconds = 10;
    $("#time span").text(seconds);
    intervalId = setInterval(timer,1000);

};

