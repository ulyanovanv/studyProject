/**
 * Created by Anastasiia on 12/29/17.
 */
import $ from '../../vendor/jquery.min.js';

$(document).ready(function(){
    var prepareToCalculate = "";
    var result = $("#calculate");
    $(".special").on("click",function(){
        var letter = $(this).text();
        if (isNaN(prepareToCalculate[prepareToCalculate.length-1])) {
            if (isNaN(letter)) {
                console.log("ii");
                return false;
            }
        }
        prepareToCalculate+=letter;
        result.val(prepareToCalculate);
        console.log(letter);
        console.log(prepareToCalculate);
    })
    $("#clean").on("click",function(){
        var newLine=prepareToCalculate.substr(0,prepareToCalculate.length-1);
        prepareToCalculate=newLine;
        result.val(newLine);
    })
    $("#even").on("click", function(){
        var x = eval(prepareToCalculate);
        result.val(x);
        prepareToCalculate = "";
    })
//    $("#division, #multiply, #minus, #plus").on('click')
})