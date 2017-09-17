/**
 * Created by Anastasya on 09.09.17.
 */
$(function(){
    $("#new-el").on("click",function(){
       $(this).animate({width:"100px", height:"100px"},2000,function(){
           $(this).css({"background-color":"red"});
       })
    })
})