/**
 * Created by Anastasiia on 11/21/17.
 */
//var $ = require("../vendor/jquery.min.js");
import $ from '../../vendor/jquery.min.js';

(function(){
  var firstPageContent = $(".first-page-content")
  var menuButton = firstPageContent.children(".first-page-content__menu-button");

  var greyDisplay = $(".hidden-menu__grey-display");
  var hiddenMenu = $(".hidden-menu");

  menuButton.on("click",function(){
      greyDisplay.css({
          "opacity":"0",
          "display":"block"
      }).animate({opacity:0.4});
      hiddenMenu.css({
          "opacity":"0",
          "display":"block"
      }).animate({opacity:1});
  })
  greyDisplay.on("click",function(){
      greyDisplay.animate({opacity:0},1000, null, function(){
          $(this).css({
              "display":"none"
          });
      });
      hiddenMenu.animate({opacity:0},1000, null, function(){
          $(this).css({
              "display":"none"
          });
      });
  })


}())

