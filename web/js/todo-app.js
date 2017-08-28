/**
 * Created by Anastasya on 27.08.17.
 */

function Count(){
    var listLength = $("li").length;
    $("#number_of_lis>span").text(listLength);
}
Count();


$(document).ready(function(){   //fadeIn lis
    $("li").hide().each(function(index){
        var time = 500*$(this).index()+500;
        //$(this).delay(500).animate({opacity:1.0},time,function(){
        //$(this).show();
        //});
        $(this).delay(index*500).fadeIn(time);
    })
})
function handleLiClick(){
    var removeLi = $(this);
    if (removeLi.hasClass("grey")) {
        removeLi.animate({paddingLeft:"+=240px",
            opacity: 0.0},500,function(){
            removeLi.remove();
            Count();

        });
    } else {
        removeLi.attr("class","grey");
        removeLi.detach();
        $("ul").append(removeLi);
    }
};
$(document).ready(function(){  //class change
    $("li").on('click', handleLiClick);
})

$(function(){  //form work in footer
    var newItem = $("#new_item");
    var formNew = $("#form_to_add");
    var textToSend= $("#item_description");
    var buttonToSubmit =$("#button_to_submit");
    textToSend.on("focus",function(){
        $(this).css("background-color","#fff");
    })
    textToSend.on("blur",function(){
        $(this).css("background-color","#617280");
    })
    newItem.on("click",function(){
        $("#button_to_add").hide();
        formNew.show();
    })
    buttonToSubmit.on("click",function(event){
        event.preventDefault();
        var lengthToCheck = textToSend.val().length;
        if (lengthToCheck < 5) {
            alert ("too short");
            return;
        }
        var textTo = textToSend.val();
        var newLi = $("<li>"+textTo+"</li>");
        var x = Math.floor(Math.random()*2);
        if (x===1) {
            newLi.addClass('hot');
        } else {
            newLi.addClass('orange');
        }
        $("ul").append(newLi);
        newLi.on('click', handleLiClick);

        formNew.hide();
        $("#button_to_add").show();
        textToSend.val('');
        Count();
    })
})
$(function(){
    console.log($(document).height());
    console.log($(window).height());
    console.log($("#footer").offset().top);
    var footer=$("#footer");
    var slidingDiv = $("#total_summa");
    var end = footer.offset().top - $(window).height()+100;
    $(window).on("scroll",function(){
        console.log($(window).scrollTop());
        if ( end < $(window).scrollTop()) {
            slidingDiv.animate({right:"40px"},500);
        } else {
            slidingDiv.stop(true).animate({right:"-100px"},500);
        }
    })
})


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

    $.ajax('/url', {method: 'POST', data:{dfgd:sefsef, awdawd:[]}})

});