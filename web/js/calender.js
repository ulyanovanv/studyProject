/**
 * Created by Anastasiia on 9/27/17.
 */

const months = ["Januar","Februar","March","April","May","June","July","August","September","October","November","December"];
var parentDiv = $("#third-line");

var currentDate = new Date(2017,1);







var previousMonth = currentDate.getMonth();

var newMonth = 0;
var year = 2017;

function createNextCalenderMonth(){

    parentDiv.html("");



    var newDate = currentDate.setMonth(currentDate.getMonth()+1);
    var workingMonth = new Date(newDate);


    var getNextMonth = workingMonth.setMonth(currentDate.getMonth()+1);
    var NextDateFormat = new Date(getNextMonth);

    var nextMonth = NextDateFormat.getMonth();


    var newMonth = currentDate.getMonth();
    var newWeekDay = currentDate.getDay().toString();


//    if (months[newMonth] == 11) {
//        year = year +1;
//        $("#year").text(year);
//    } else {
//        $("#year").text(year);
//    }
    $("#year").text(year);
    $("#month").text(months[newMonth]);



    function findEmptyCells(){
        for(var i = newWeekDay-1; i>0; i--){
            parentDiv.append("<div class='day blue'>0</div>");
        }
    }

    switch (newWeekDay) {
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



    var findLastDayOfCurrentMonth = NextDateFormat.setDate(NextDateFormat.getDate()-1);
    var lastDayOfCurrentMonth = new Date(findLastDayOfCurrentMonth);
    var lastDay =lastDayOfCurrentMonth.getDate();

    for (var number = 1; number <= lastDay; number ++) {
        parentDiv.append("<div class='day'>"+number+"</div>");
    }

}



$(function(){
    $("#to-right").on("click", createNextCalenderMonth);
})
