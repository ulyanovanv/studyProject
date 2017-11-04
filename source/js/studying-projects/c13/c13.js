/**
 * Created by Anastasiia on 10/17/17.
 */
import $ from '../../vendor/jquery.min.js';
import * as functions from './pure-functions.js';

const {universalRequired, universalTypes, checkingPasswords, checkYoonger, getBirthdayTimestamp, sendForm, transferReceivedData} = functions;


(function(){
    var form = document.forms[0];
    var elements = form.elements;
    var birth = $(document.forms[0].elements.birthdays);
//    var valid = {};  //create an object for checking the accurance of the form information, if some inaccurance - false, else - true


    var typesCheck = {
        email:      {check : "^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+",  //!!without / /  as we have to create RegExp later, and the propgramm stand /  / for us
                    message: "incorrect email"  },
        password:   {check: "^\\d+$",
                    message: "incorrect password"},
        date:       { check : "^(\\d{1,4})-(\\d{1,2})-(\\d{1,2})$",
                    message: "incorrect date"}
    };

    var mistakesMessage = ["Please, write the info","your password too short", "passwords do not match", "date cannot surpass current date", "parent's agreement is required"];
    console.log(mistakesMessage[1]);


    // submit button function
    form.onsubmit = function(event){
        event.preventDefault();

        var valid = {}; // create an object to check the status of check for each element - true or false

        valid = universalRequired(valid,elements, mistakesMessage);// U,check for inputs that have reqiured attr to be filled

        valid = universalTypes(valid,elements,typesCheck);  // U, check for input type, its correspondence to the info data throug RegExp in typesCheck

        valid = checkingPasswords(valid,elements, mistakesMessage);

        valid = checkYoonger(getBirthdayTimestamp(birth), valid, elements, mistakesMessage, birth);

        console.log(valid);
        sendForm(event,valid, elements, form);
    }

    // reset button function
    var reset = elements.reset;
    reset.onclick = function(){
        var spans = $("span.message");
        for (var i=0; i<7; i++){
            $(spans[i]).text("");
        }
    }

    var returnInfoButton = elements.returnInfoButton;

    // return info function with ajax  JQUERY
//    returnInfoButton.onclick = function(event){
//        event.preventDefault();
//        $.ajax({
//            type:"GET",
//            url:"/user",
////            data: -
//            success: function(data){
//                transferReceivedData(data.user, elements); //in pure-func file
//            },
//            error: function(error){
//                console.log(error);
//            }
//        })
//    }


    //return info with AJAX Method Jquery
//    returnInfoButton.onclick = function(event){
//        event.preventDefault();
//        var xhr = new XMLHttpRequest();
//        xhr.onload = function(){
//            if (xhr.status === 200){
//                var returnedContent = JSON.parse(xhr.responseText);
//                transferReceivedData(returnedContent.user, elements); // .user - in object search
//            }
//        }
//        xhr.open("GET","/user",true);
//        xhr.send(null);
//    }

    //return info with GET  Method Jquery
    returnInfoButton.onclick = function(event){
        event.preventDefault();
        $.getJSON("/user").done(function(data){
            transferReceivedData(data.user, elements);
        }).fail(function(){
            console.log("fail");
        })
    }



    //passwords
    //when in focus, remove icons
    $(elements.password).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });
    $(elements.confpassword).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });

    $(elements.password).on("blur",function(){
        var valid = {};
        checkingPasswords(valid,elements, mistakesMessage);
    });

    $(elements.confpassword).on("blur",function(){
        var valid = {};
        checkingPasswords(valid,elements, mistakesMessage);
    })


    // private check
    // age proof
    var current = new Date(); //создается сегодняшняя дата
    var curYear = current.getFullYear();
    var curMonth = current.getMonth();
    var curDate = current.getDate();

    var maxMonth = curMonth+1;
    if (maxMonth<10){
        maxMonth = "0"+maxMonth; // for value we need 1-12 instead of 0-11
    }

    var max = curYear+"-"+maxMonth+"-"+curDate;
    birth.attr("max",max);
    birth.attr("value",max);

    $(birth).on("change",function(){
        var valid = {};
        checkYoonger(getBirthdayTimestamp(birth), valid, elements, mistakesMessage,birth); // transfer milliseconds from birth date
    });


    $(elements.smallers).on("change", function(){
        var message = birth.siblings(".message");
        message.toggle();
    })


    //textarea short-story

    $(elements.shortstory).on("input keypress",function(event){
        var max = 140;
        var valueLength = event.target.value.length;
        var leftSymbols = max-valueLength;
        $(".symbols-left").text(leftSymbols);
        var localSpanMessage = $(event.target).siblings('.message');
        if (leftSymbols<1){
            localSpanMessage.text("no symbols left");
            elements.shortstory.disabled = true; //we block the input for 1 sec, after that if we try again to write first block for 1 sec than disblock
            setTimeout(function() { elements.shortstory.disabled = false; }, 1000);
        } else if (leftSymbols<11){
            localSpanMessage.text("left few symbols");
            $(".symbols-left").addClass("red");
        } else {
            localSpanMessage.text("");
            $(".symbols-left").removeClass("red");
        }
    })


}())