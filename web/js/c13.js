/**
 * Created by Anastasiia on 10/17/17.
 */

(function(){
    var form = document.forms[0];
    var elements = form.elements;
    var valid = {};
    var reset = elements.reset;
    var birth = $(document.forms[0].elements.birthdays);
    var returnInfoButton = elements.returnInfoButton;
    console.log(returnInfoButton);

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
        password:   {check: "^\\d+$",
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
        sendForm(event);
    }


    // return info function with ajax  JQUERY
//    returnInfoButton.onclick = function(event){
//        event.preventDefault();
//        $.ajax ({
//            type: "GET",
//            url: "/user",
//            timeout: 2000,
//            success: function(data){
//                returnUsedData(data.user);
//            },
//            fail: function(data){
//                console.log("error");
//            }
//        })
//    }

    //return info function with ajax  JS  or switch to jquery
    returnInfoButton.onclick = function(){
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if (xhr.status === 200){
                var returnedContent = JSON.parse(xhr.responseText);
                returnUsedData(returnedContent.user);
            }
        }
        xhr.open("GET","/user",true);
        xhr.send(null);
    }

    // hepler function for return form info
    function returnUsedData(user){
        for (var i = 0; i<7; i++){
            var el = elements[i];
            var elName = elements[i].name;
            for (var key in user){
                if (elName === key){
                    el.value = user[key];
                }
            }
        }
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
                    valid[el.attr('name')] = "false";
                } else {
                    valid[el.attr('name')] = "true";
                    span.text("");
                }
            }
        } catch(error) {
            console.log(error);
        }
        console.log(valid);
    }

    //passwords
    $(elements.password).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });
    $(elements.confpassword).on("focus",function(){
        $(this).removeClass("cross","check-mark");
    });

    $(elements.password).on("blur",function(){
        valid[elements.password.name] = null;
        checkingPasswords();
    });

    $(elements.confpassword).on("blur",function(){
        valid[elements.password.name] = null;
        checkingPasswords();
    })


    // private check

    //password check
    function checkingPasswords(){
        var password = $(elements.password);
        var span1 = password.next();
        var confpassword = $(elements.confpassword);
        var span2 = confpassword.next();
        var passwordValue = password.val();
        var confpasswordValue = confpassword.val();
        if (passwordValue<4 &&  confpasswordValue<4){
            alert("your password too short");
            valid[elements.password.name] = "false";
            valid[elements.confpassword.name] = "false";
            return;
        }
        if (valid[elements.password.name] === "false") {
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
            if (dateToCompareMil >= newOneMil){
                if (elements.smallers.checked === true){
                    valid[elements.smallers.name] = "true";
                    return;
                }
                console.log("young");
                $(".show-when-small").show();
                $("#smallers").attr("required","true");
                valid[elements.smallers.name] = "false";
                console.log(valid);
            } else {
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
    })

    function sendForm(event){
        try {
            checkingPasswords();
            var dateToCompare = new Date(birth.val());// создается пользователем его дата рождения
            var dateToCompareMil = dateToCompare.getTime();
            checkYoonger(birth, dateToCompareMil);
            for (var key in valid){
                if (valid[key] === "false") {
                    event.preventDefault();
//                    console.log("problem");
                    alert("check the accuracy of data")
                    return;
                }
            }
            console.log(valid);
            event.preventDefault();

////            Jquery ajax method

//            var content = $(form).serialize();
//            $.ajax({
//                type: "POST",
//                url: "/user",
//                data: content,
//                timeOut: 2000,
//                success: function(){
//                    console.log("success");
//                },
//                error: function(error){
//                    console.log(error);
//                }
//            })

//            pure Java Script ajax method
            var content = "";
            content += "name="+encodeURIComponent(elements.name.value); // first line to add
            for (var i=1;i<7;i++){
                var name = elements[i].name;
                var value = elements[i].value;
                content += '&'+name+'='+ encodeURIComponent(value); // important symbols & and =
            }
            var xmlhttp = new XMLHttpRequest(); // Создаём объект XMLHTTP
            xmlhttp.open('POST', '/user', true); // Открываем асинхронное соединение
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
            xmlhttp.send(content); // Отправляем POST-запрос


        }catch(error){
            console.log(error);
        }
    }
}())