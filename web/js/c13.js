/**
 * Created by Anastasiia on 10/17/17.
 */

(function(){
    var form = document.forms[0];
    var elements = form.elements;
    var valid = {};
    var reset = elements.reset;

    for (var i=0; i<7; i++){
        var parent = $(elements[i]).parent();
        var span = $("<span></span>");
        span.addClass("message");
        parent.append(span);
        var Key = elements[i].name;
        var valued = "true";
        valid[Key] = valued;
    }

    var typesCheck = {
        email:      {check : "^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+",
                    message: "incorrect email"  },
        password:   {check: "\\d+",
                    message: "incorrect password"},
        date:       { check : "^(\\d{1,4})-(\\d{1,2})-(\\d{1,2})$",
                    message: "incorrect date"}
    };


    // reset button function
    reset.onclick = function(){
        var spans = $("span.message");
        for (var i=0; i<7; i++){
           $(spans[i]).text("");
        }
    }

    // submit button function
    form.onsubmit = function(event){
        universalRequired();
        universalTypes();
//        console.log($("#birthday").val());
        sendForm(event);
    }

    function universalRequired(){
            for (var i = 0; i<elements.length; i++){
                if (elements[i].hasAttribute("required")){  // elements[i].required - also possible
                    var input = $(elements[i]);
                    var par = input.parent();
                    var span = par.children('.message');
//                    console.log(input.val());
    //                console.log(parent.children());
                    if (input.val()){
//                        input.removeData( "error" );
                        span.text("");
                        valid[elements[i].name] = "true";
                    }  else {
                        input.data('error',"Please, write the info");
                        span.text(input.data("error"));
                        valid[elements[i].name] = "false";
                    }

                }
            }
    }
    function universalTypes(){
        try {
            for (var i = 0; i<elements.length; i++){
                var typpie;
                var typeOfInput = elements[i].type;
                switch(typeOfInput){
                    case "email":
                        typpie = typesCheck.email;
                        break;
                    case "password":
                        typpie = typesCheck.password;
                        break;
                    case "date":
                        typpie = typesCheck.date;
                        break;
                    default:
                        continue;
                }
                var el = $(elements[i]);
                var span = el.next();
                var check = new RegExp(typpie.check);
//                console.log(check);
                if (check.test(el.val()) === false){
                    el.data('error2',typpie.message);
                    span.text(el.data('error2'));   //??
                    valid[el.name] = "false";
                } else {
                    valid[el.name] = "true";
                    span.text("");
                }
            }
        } catch(error) {
            console.log(error);
        }
    }





    //passwords
    $(elements.password).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });
    $(elements.confpassword).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });



    $(elements.password).on("blur",function(){
        checkingPasswords();
    });
    $(elements.confpassword).on("blur",function(){
        checkingPasswords();
    })

//

    function checkingPasswords(){
        var password = $(elements.password);
        var span1 = password.next();
        var confpassword = $(elements.confpassword);
        var span2 = confpassword.next();
        var passwordValue = password.val();
        var confpasswordValue = confpassword.val();
        if (passwordValue<2 &&  confpasswordValue<2){
            alert("your password too short");
            valid[elements.password.name] = "false";
            valid[elements.confpassword.name] = "false";
            return;
        }
        if(passwordValue === confpasswordValue) {
            password.addClass("check-mark");
            confpassword.addClass("check-mark");
            password.removeClass("cross");
            confpassword.removeClass("cross");
            span1.text("");
            span2.text("");
            valid[elements.password.name] = "true";
            valid[elements.confpassword.name] = "true";
//            console.log(valid);
        } else {
            password.addClass("cross");
            confpassword.addClass("cross");
            password.removeClass("check-mark");
            confpassword.removeClass("check-mark");
            password.data("error3","passwords do not match");
            span1.text(password.data("error3"));
            span2.text(password.data("error3"));
            valid[elements.password.name] = "false";
            valid[elements.confpassword.name] = "false";
//            console.log(valid);
        }

    }
    var birth = $(document.forms[0].elements.birthdays);
    // age proof
    $(birth).on("change",function(){
        var dateToCompare = new Date(birth.val());// создается пользователем его дата рождения
        var dateToCompareMil = dateToCompare.getTime();

        checkYoonger(birth, dateToCompareMil);
    });

    function checkYoonger(birth, dateToCompareMil){
        try {
            var current = new Date(); //создается сегодняшняя дата
            var curYear = current.getFullYear();
            var curMonth = current.getMonth();
            var curDate = current.getDate();
            var minAge = 18;

            var newOne = new Date(curYear-minAge,curMonth,curDate+1); // создается дата ровно 18 лет назад
            var newOneMil = newOne.getTime();
                console.log(newOneMil);




            if (dateToCompareMil >= newOneMil){
                if (elements.smallers.checked === true){
                    valid[elements.smallers.name] = "true";
                    return;
                }
                console.log("young");
                $(".show-when-small").show();
                $("#smallers").attr("required","true");

                valid[elements.smallers.name] = "false";
    //            console.log(valid);
    //            console.log(elements.smallers.name);
                console.log(valid[elements.birthdays.name]);
                console.log(valid);

            } else {
                console.log(birth);
                console.log("old");
                $(".show-when-small").hide();
                $("#smallers").removeAttr("required");

                valid[elements.smallers.name] = "true";
                console.log(valid);
            }
        } catch(error){
            console.log(error);
        }
    }





    //textarea short-story

    $(elements.shortstory).on("input keypress",function(event){
        var max = 140;
        var valueLength = event.target.value.length;
        var leftSymbols = max-valueLength;
        $(".symbols-left").text(leftSymbols);
        var localSpanMessage = $(event.target).siblings('.message');
        if (leftSymbols<1){
            localSpanMessage.text("no symbols left");
            elements.shortstory.disabled = true;
            setTimeout(function() { elements.shortstory.disabled = false; }, 1000);
        } else if (leftSymbols<11){
            localSpanMessage.text("left few symbols");
            $(".symbols-left").addClass("red");
        } else {
            localSpanMessage.text("");
            $(".symbols-left").removeClass("red");

        }
//        console.log(leftSymbols);
    })



    function sendForm(event){
        try {
            console.log(valid);
            checkingPasswords();
            var dateToCompare = new Date(birth.val());// создается пользователем его дата рождения
            var dateToCompareMil = dateToCompare.getTime();
            checkYoonger(birth, dateToCompareMil);
            console.log(valid);
            for (var key in valid){
                if (valid[key] === "false") {
                    event.preventDefault();
                    console.log("problem");
//                    alert("check the accuracy of data")
                    break;
                }
            }
        }catch(error){
            console.log(error);
        }

    }


}())


