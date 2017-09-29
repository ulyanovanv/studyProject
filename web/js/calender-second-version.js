/**
 * Created by Anastasiia on 9/29/17.
 */
const months = ["Januar","Februar","March","April","May","June","July","August","September","October","November","December"];
var parentDiv = $("#third-line");

var currentMonth = 2;
var currentYear = 2017;

var currentDate = new Date(currentYear,currentMonth);
var currentMonth = currentDate.getMonth();
var currentWeekDay = currentDate.getDay().toString();

var nextDate = new Date(currentYear,currentMonth + 1);
var nextMonthh = nextDate.getMonth();

var previousDate = new Date(currentYear,currentMonth - 1);
var previousMonth = previousDate.getMonth(previousDate);

$(document).ready(function(){
    findEmptyCells();
    addEmptyCells();
    createCalenderDates();
})



function createNextCalenderMonth(){

    parentDiv.html("");

    previousDate =  currentDate;
    previousMonth = currentMonth;


    currentDate = nextDate;
    currentMonth = nextMonthh;


    $("#year").text(currentYear);
    $("#month").text(months[currentMonth]); //writing the year and month -------
    //    if (months[newMonth] == 11) {
//        year = year +1;
//        $("#year").text(year);
//    } else {
//        $("#year").text(year);
//    }

    addEmptyCells(); //we add cells before current month

    nextDate = nextDate.setMonth(nextDate.getMonth()+1); //milliseconds
    nextDate = new Date(nextDate);
    nextMonthh = nextDate.getMonth();
    console.log(nextDate);
    console.log(nextMonthh);
    console.log(currentDate);

    createCalenderDates();
}

//function createPreviousCalenderMonth(){
//    parentDiv.html("");
//
//    previousDate =  currentDate;
//    previousMonth = currentMonth;
//    console.log(previousDate);
//    console.log(previousMonth);
//
//
//    currentDate = nextDate;
//    currentMonth = nextMonthh;
//    console.log(currentDate);
//    console.log(currentMonth);
//
//
//
//    $("#year").text(currentYear);
//    $("#month").text(months[currentMonth]);
//
//
//    addEmptyCells(); //we add cells before current month
//
//
//    nextDate = nextDate.setMonth(nextDate.getMonth()+1); //milliseconds
//    nextDate = new Date(nextDate);
//    nextMonthh = nextDate.getMonth();
//    console.log(nextDate);
//    console.log(nextMonthh);
//    console.log(currentDate);
//
//    var findLastDayOfCurrentMonth = nextDate.setDate(nextDate.getDate()-1);
//    var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
//    var lastDay =lastDayOfCurrentMonth.getDate();
//
//    for (var number = 1; number <= lastDay; number ++) {
//        parentDiv.append("<div class='day'>"+number+"</div>");
//    }
//}


function findEmptyCells(){
    for(var i = currentWeekDay-1; i>0; i--){
        parentDiv.append("<div class='day blue'>0</div>");
    }
}
function addEmptyCells(){
    switch (currentWeekDay) {
        case "2":
            findEmptyCells();
            break;
        case "3":
            findEmptyCells();
            break;
        case "4":
            findEmptyCells();
            break;
        case "5":
            findEmptyCells();
            break;
        case "6":
            findEmptyCells();
            break;
        case "0":
            for(var i = 6; i>0; i--){
                parentDiv.append("<div class='day blue'>0</div>");
            }
            break;
    }
}
function createCalenderDates(){
    var findLastDayOfCurrentMonth = nextDate.setDate(nextDate.getDate()-1);
    var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
    var lastDay =lastDayOfCurrentMonth.getDate();

    for (var number = 1; number <= lastDay; number ++) {
        parentDiv.append("<div class='day'>"+number+"</div>");
    }
}




$(function(){
    $("#to-right").on("click", createNextCalenderMonth);
})
//$(function(){
//    console.log("he");
//    $("#to-left").on("click",createPreviousCalenderMonth);
//})

