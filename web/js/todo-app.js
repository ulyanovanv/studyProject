/**
 * Created by Anastasya on 27.08.17.
 */


console.log("ToDo !!!");

$(function(){
    $.ajax('/to-do-app-load', {}).done(function(oooop){
        var content = "";
        var obj = JSON.parse(oooop).data;
        for (var x = 0; x < obj.length; x++) {
            content = content + "<p>" + obj[x].value + " " + obj[x].isDone + "</p>";
        }
        document.getElementById("jsonN").innerHTML=content;
        $("#jsonN").html(content);
    })

});