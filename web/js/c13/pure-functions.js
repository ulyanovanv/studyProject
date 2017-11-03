/**
 * Created by Anastasiia on 11/2/17.
 */
//universal for required el
function universalRequired(valid,elements, mistakesMessage){
    for (var i = 0; i<elements.length; i++){
        if (elements[i].hasAttribute("required")){  // elements[i].required - also possible
            var input = $(elements[i]);
            var par = input.parent();
            var span = par.children('.message');
            if (input.val()){  //it means there is any text at least
                span.text("");
                valid[elements[i].name] = true;
            }  else {
                span.text(mistakesMessage[0]);
                valid[elements[i].name] = false;
            }
        }
    }
    return valid;
}

//universal for types of inputs' values
function universalTypes(valid,elements, typesCheck) {
    try {
        for (var i = 0; i<elements.length; i++){
            var typpie;
            var typeOfInput = elements[i].type;
            switch(typeOfInput){
                case "email":
                    typpie = typesCheck.email; // find the correpondent type in object typesCheck
                    break;
                case "password":
                    typpie = typesCheck.password;
                    break;
                case "date":
                    typpie = typesCheck.date;
                    break;
                default:
                    continue; // for this element the condition interupted, we continue with following element
            }
            var el = $(elements[i]);
            var span = el.next();   // not good
            var check = new RegExp(typpie.check); // here we create RegExp
            if ( valid[elements[i].name] === false){
                continue;
            }
            if (check.test(el.val()) === false){  // we check the entered info
                span.text(typpie.message);
                valid[el.attr('name')] = false;
            } else {
                valid[el.attr('name')] = true;
                span.text("");
            }
        }
    } catch(error) {
        console.log(error);
    }
    return valid;
//        console.log(valid);
}

//private checks
//password check
function checkingPasswords(valid,elements,mistakesMessage){
    var password = $(elements.password);
    var span1 = password.next();
    var confpassword = $(elements.confpassword);
    var span2 = confpassword.next();
    var passwordValue = password.val();
    var confpasswordValue = confpassword.val();
    if (valid[elements.password.name] === false || valid[elements.confpassword.name] === false){ // if already dring first 2 universal check was false, than no sense to check on
        return valid;
    }
    if (passwordValue.length<4 &&  confpasswordValue.length<4){
        span1.text(mistakesMessage[1]);
        span2.text(mistakesMessage[1]);
        valid[elements.password.name] = false;
        valid[elements.confpassword.name] = false;
        return valid;
    }
    if(passwordValue === confpasswordValue) {
        password.addClass("check-mark");
        confpassword.addClass("check-mark");
        password.removeClass("cross");
        confpassword.removeClass("cross");
        span1.text("");
        span2.text("");
        valid[elements.password.name] = true;
        valid[elements.confpassword.name] = true;
//            console.log(valid);
    } else {
        password.addClass("cross");
        confpassword.addClass("cross");
        password.removeClass("check-mark");
        confpassword.removeClass("check-mark");
        span1.text(mistakesMessage[2]);
        span2.text(mistakesMessage[2]);
        valid[elements.password.name] = false;
        valid[elements.confpassword.name] = false;
//            console.log(valid);
    }
    return valid;
}

//birthday check
function checkYoonger(dateToCompareMil, valid, elements, mistakesMessage, birth){
    try {
        console.log(elements);
        if (valid[elements.birthdays.name] === false) {  // if already false after universal checks, no sense to check
            return valid;
        }
        var current = new Date(); //создается сегодняшняя дата
        var curYear = current.getFullYear();
        var curMonth = current.getMonth();
        var curDate = current.getDate();

        var minAge = 18;
        var newOne = new Date(curYear-minAge,curMonth,curDate+1); // создается дата ровно 18 лет назад
        var newOneMil = newOne.getTime();
        var message = birth.siblings(".message");
        var maxDate = new Date(curYear,curMonth,curDate); // создаем дату, за которую нельзя заходить, то есть за сегодняшнюю, объекты дат необходимо пересоздавать
        var maxYear = maxDate.getFullYear(); // чтобы записать в maxvalue сегодняшнуюю дату
        var maxMonth = maxDate.getMonth()+1;
        if (maxMonth<10){
            maxMonth = "0"+maxMonth; // for value we need 1-12 instead of 0-11
        }
        var maxDatum = maxDate.getDate();
        var maxMil = maxDate.getTime(); //transfer to miliseconds since 1970.01.01

        var max = maxYear+"-"+maxMonth+"-"+maxDatum;


        if (dateToCompareMil >= newOneMil){
            if(dateToCompareMil > maxMil){  // if it is already future -> return
                valid[elements.birthdays.name] = false;
                message.text(mistakesMessage[3]);
                return valid;
            }
            else {
                message.text("");
            }
            if (elements.smallers.checked === true){
                valid[elements.smallers.name] = true;
                return valid;
            } else {
                $(".show-when-small").show(); //??
                $("#smallers").attr("required",true);
                valid[elements.smallers.name] = false;
                message.text(mistakesMessage[4]);
            }
        } else {
            $(".show-when-small").hide();
            $("#smallers").removeAttr("required");
            valid[elements.smallers.name] = true;
            message.text("");
        }
    } catch(error){
        console.log(error);
    }
    return valid;
}

function getBirthdayTimestamp(birth){
    var dateToCompare = new Date(birth.val());// создается пользователем его дата рождения
    return dateToCompare.getTime();
}


//POST // use any method

function sendForm(event,valid, elements, form){
    try {
        for (var key in valid){
            if (valid[key] === false) {
                alert("check the accuracy of data");
                return;
            }
        }
        console.log(valid);
        //   Jquery ajax method

//        var content = $(form).serialize();
//        $.ajax({
//            type:"POST",
//            url:"/user",
//            data: content,
//            timeout: 2000,
//            beforeSend: function(){},
//            success: function(){
//                console.log("success");
//            },
//            error: function(error){
//                console.log(error);
//            }

        // Jquery post method

        var content = $(form).serialize();
        console.log(content);
        $.post("/user",content).done(function(){
            console.log("done");
        }).fail(function(){
            console.log("fail");
        }).always(function(){
            console.log("always");
        });

//            pure Java Script ajax method

//        var xhr = new XMLHttpRequest();
//        var content = "";
//        content += "name=" + elements.name.value;
//        for (var i=0; i<7; i++){
//            var name = elements[i].name;
//            var value = elements[i].value;
//            content += "&" + name + "=" + value;
//        }
//        xhr.open("POST","/user", true);
//        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//        xhr.send(content);

    }catch(error){
        console.log(error);
    }
}


//GET

// hepler function for return form info
function transferReceivedData(infa, elements){
    for(var i=0; i<7; i++){
        var el = elements[i];
        var elName = elements[i].name;

        for (var keyy in infa){
            console.log(elName);
            console.log(keyy);
            if (elName === keyy) {
                el.value = infa[keyy];
            }
        }
        console.log(el.value);
    }
}
