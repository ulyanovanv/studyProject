/**
 * Created by Anastasiia on 10/11/17.
 */
$(function(){
    var sub = $("form");
    $(document).on('submit', function(event) {
        event.preventDefault();
        var content =sub.serialize();
        $.ajax({
            type: "POST",
            url: "/user",
            data: content,
            success: function(data){
//                if (data.status === "error") {
//                    $('#label-name').text($('#label-name').text() + " " + data.errors[0].message);
//                }
                console.log(data);
            }
        });

    });


})

