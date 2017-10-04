/**
 * Created by Anastasiia on 9/29/17.
 */
const months = ["Januar","Februar","March","April","May","June","July","August","September","October","November","December"];
var parentDiv = $("#third-line");


var today = new Date();
var currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
var currentMonth = currentDate.getMonth();
var currentWeekDay = currentDate.getDay().toString();
var currentYear = currentDate.getFullYear();


$(document).ready(function(){
    createEmptyCells(currentWeekDay, parentDiv);
    createCalenderDates(nextDate, parentDiv);
    $("#year").text(currentYear);
    $("#month").text(months[currentMonth]);
});

var nextDate = new Date(currentYear,currentMonth + 1);
var nextMonthh = nextDate.getMonth();

var previousDate = new Date(currentYear,currentMonth - 1);
var previousMonth = previousDate.getMonth(previousDate);


function createNextCalenderMonth(){

    parentDiv.html("");
    previousDate =  currentDate;
    previousMonth = currentMonth;

    currentDate = new Date(nextDate);
    currentMonth = nextMonthh;
    currentYear = currentDate.getFullYear();
    currentWeekDay = currentDate.getDay().toString();

    $("#year").text(currentYear);
    $("#month").text(months[currentMonth]); //writing the year and month -------

    createEmptyCells(currentWeekDay,parentDiv);

    nextDate = nextDate.setMonth(nextDate.getMonth()+1); //milliseconds
    nextDate = new Date(nextDate);
    nextMonthh = nextDate.getMonth();

    createCalenderDates(nextDate,parentDiv)
}

function createPreviousCalenderMonth(){
    parentDiv.html("");
    nextDate =  currentDate;
    nextMonthh = currentMonth;

    currentDate = new Date(previousDate);
    currentMonth = previousMonth;

    currentYear = currentDate.getFullYear();
    currentWeekDay = currentDate.getDay().toString();

    $("#year").text(currentYear);
    $("#month").text(months[currentMonth]);

    createEmptyCells(currentWeekDay,parentDiv);

    previousDate = previousDate.setMonth(previousDate.getMonth()-1); //milliseconds
    previousDate = new Date(previousDate);
    previousMonth = previousDate.getMonth();

    createCalenderDates(nextDate,parentDiv)
}


function findEmptyCells(currentWeekDay, div) {
    var yesterday = new Date(currentDate);
    var findLastDayOfCurrentMonth = yesterday.setDate(currentDate.getDate()-1);
    var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
    var lastDay = lastDayOfCurrentMonth.getDate();
    var lastWeekDay = lastDayOfCurrentMonth.getDay();

    var array = [];
    for(var ll = lastDay - lastWeekDay + 1; ll<=lastDay; ll++){
        array.push(ll);
    }
    var xCounter = 0;
    for(var i = currentWeekDay - 1; i > 0; i--){
        div.append("<div class='day blue'>" + array[xCounter] +"</div>");
        xCounter++;
    }
}

function createEmptyCells(currentWeekDay, parentDiv) {
    switch (currentWeekDay) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            findEmptyCells(currentWeekDay, parentDiv);
            break;
        case "0":
            var yesterday = new Date(currentDate);
            var findLastDayOfCurrentMonth = yesterday.setDate(currentDate.getDate()-1);
            var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
            var lastDay = lastDayOfCurrentMonth.getDate();
            var lastWeekDay = lastDayOfCurrentMonth.getDay();

            var array = [];
            for(var ll = lastDay - lastWeekDay + 1; ll<=lastDay; ll++){
                array.push(ll);
            }
            var xCounter = 0;
            for(var i = 6; i>0; i--){
                parentDiv.append("<div class='day blue'>" + array[xCounter] +"</div>");
                xCounter++;
            }
            break;
    }
};

function createCalenderDates(nextDate, parentDiv){
    var yesterday = new Date(nextDate);
    console.log(yesterday);
//    var currentWeekDay = yesterday.getDay();
    var findLastDayOfCurrentMonth = yesterday.setDate(nextDate.getDate()-1); //?
    var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
    var lastDay = lastDayOfCurrentMonth.getDate();
    var currWeekDay = lastDayOfCurrentMonth.getDay().toString();
    console.log(currWeekDay);

    for (var number = 1; number <= lastDay; number ++) {
        var date = new Date(yesterday.getFullYear(), yesterday.getMonth(), number);
        var newDay = $("<div class='day'>"+number+"</div>");
        parentDiv.append(newDay);

        if (today.toDateString() == date.toDateString()){
            newDay.addClass("current-date");
        }
    }
    createNewDaysOfNextMonths(currWeekDay);

}
function createNewDaysOfNextMonths(currWeekDay){
    var addDateCounter;
    switch(currWeekDay) {
        case "1":
            addDateCounter = 6;
            break;
        case "2":
            addDateCounter = 5;
            break;
        case "3":
            addDateCounter = 4;
            break;
        case "4":
            addDateCounter = 3;
            break;
        case "5":
            addDateCounter = 2;
            break;
        case "6":
            addDateCounter = 1;
            break;
    }
    for (var i = 1; i <= addDateCounter;i++){
        var nDay = $("<div class='day blue'>"+i+"</div>");
        parentDiv.append(nDay);
    }
}


$(function(){
    $("#to-right").on("click", createNextCalenderMonth);
})
$(function(){
    $("#to-left").on("click",createPreviousCalenderMonth);
})
