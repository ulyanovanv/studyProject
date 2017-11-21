/**
 * Created by Anastasiia on 11/21/17.
 */
//var $ = require("../vendor/jquery.min.js");
import $ from '../../vendor/jquery.min.js';

var button = $("#button_to_submit");
console.log(button);
button.on("click", function(event){
    event.preventDefault();
    event.target.animate({width:"500px"},2000);
})