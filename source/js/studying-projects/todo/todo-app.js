/**
 * Created by Anastasya on 27.08.17.
 */

import $ from '../../vendor/jquery.min.js';

function Count(){
    var listLength = $("li").length;
    $("#number_of_lis>span").text(listLength);
}



$(document).ready(function(){   //fadeIn lis
    $("li").hide().each(function(index){
        var time = 500*$(this).index()+500;
        //$(this).delay(500).animate({opacity:1.0},time,function(){
        //$(this).show();
        //});
        $(this).delay(index*500).fadeIn(time);
    })
})
function handleLiClick(event){
    var removeLi = $(this);
    console.log(event.target);
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
        randomListElementClass(newLi);
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


function randomListElementClass(el) {
    var x = Math.floor(Math.random()*2);
    if (x===1) {
        el.addClass('hot');
    } else {
        el.addClass('orange');
    }
}


//$(function(){
//    $.ajax('/to-do-app-load', {}).done(function(oooop){
//        //var first-page-content = "";
//        var obj = JSON.parse(oooop).data;
//        var container = $("#spisok ul");
//        container.html('');
//        for (var x = 0; x < obj.length; x++) {
//            var el = $("<li>" + obj[x].value + " " + obj[x].isDone + "</li>");
//
//            console.log(obj[x].isDone);
//            if (obj[x].isDone === 'true') {
//                randomListElementClass(el);
//            } else {
//                el.addClass("grey");
//            }
//            el.on('click', handleLiClick);
//            container.append(el);
//        }
//        Count();
//    })
//    //$.ajax('/url', {method: 'POST', data:{dfgd:sefsef, awdawd:[]}})
//});

//$.post('/to-do-app-save', {data:{data:[{value:'honey', isDone:true}, {value:'sausge', isDone:false},  {value:'milk', isDone:true}, {value:'milk', isDone:false} ]}});

$(function(){
    $.ajax({
        type: "GET",
        url: '/to-do-app-load',
        timeout: 100,
        beforeSend: function(){
            $("#spisok ul").append("<div id='wait'> wait a moment</div>");
        },
        complete: function() {
            $("#spisok ul").remove("#wait");
        },
        success: function(data) {
            var obj = JSON.parse(data).data;
            var container = $("#spisok ul");
            container.html('');
            for (var x = 0; x < obj.length; x++) {
                var el = $("<li>" + obj[x].value + "</li>");
                randomListElementClass(el);
                el.on('click', handleLiClick);
                container.append(el);
            }
            Count();
        },
        error: function() {
            $("#spisok ul").append("<span> not success, try again</span>");
        }

    })
    //$.ajax('/url', {method: 'POST', data:{dfgd:sefsef, awdawd:[]}})
});
