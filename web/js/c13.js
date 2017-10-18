/**
 * Created by Anastasiia on 10/17/17.
 */

(function(){
    var form = document.forms[0];
    var elements = form.elements;
    var valid = {};

    for (var i=0; i<7; i++){
        var parent = $(elements[i]).parent();
        var span = $("<span></span>");
        span.addClass("message");
        parent.append(span);

        var Key = elements[i].name;
        var valued = "true";
        valid[Key] = valued;
    }


    form.onsubmit = function(event){
        universalRequired();
        universalTypes();
        console.log($("#birthday").val());
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
        for (var i = 0; i<elements.length; i++){
            if (elements[i].type === "email"){

                var el = $(elements[i]);
                var span = el.next();
                var check =  /^[a-zA-Z0-9\.\+\-]+@[a-zA-Z]+\.[a-zA-Z]+/;
                if (check.test(el.val()) === false){
                    el.data('error',"incorrent email");
                    span.text(el.data('error'));
                    valid[elements[i].name] = "false";
                } else {
                    valid[elements[i].name] = "true";
                }
            }
        }
    }

    function sendForm(event){
        try {
            for (var keyp in valid){
                if (valid[keyp] === "false") {
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


