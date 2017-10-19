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
        email: function(){
            var check =  /^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+/;
        },
        password: function(){
            var check = /\d+/;
        },
        date: function(){
            var check = /(\d{,4})-(\d{1,2}\)-(\d{1,2})/;
        }
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
            console.log(valid);
    }
    function universalTypes(){
        try {
            for (var i = 0; i<elements.length; i++){
                if (elements[i].type === "email"){

                    var el = $(elements[i]);
                    var span = el.next();
                    console.log(span);
                    var check =  /^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+/;
                    if (check.test(el.val())){
                        valid[elements[i].name] = "true";
                        span.text("");

                    } else {
                        el.data('error2',"incorrent email");
                        span.text(el.data('error2'));   //??
                        valid[elements[i].name] = "false";
                    }
                }
            }
            console.log(valid);
        } catch(error) {
            console.log(error);
        }
    }





    //check the whole form
    function sendForm(event){
        try {
            for (var key in valid){
                if (valid[key] === "false") {
                    event.preventDefault();
                    console.log("problem");
//                    alert("check the accuracy of data")
                    break;
                }
            }
        } catch(error){
            console.log(error);
        }
    }

}())


