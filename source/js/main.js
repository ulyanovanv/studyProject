import $ from './vendor/jquery.min.js';

//bootstrap4 plugins
import 'popper.js';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

//polifills
require('es6-promise').polyfill();
require('es6-object-assign').polyfill();

let body = $("body");

if (body.hasClass("todo")){
    require("./studying-projects/todo/todo-app.js");
}
if (body.hasClass("calender")){
    require("./studying-projects/calender/calender-second-version.js");
}
if (body.hasClass("main-in-numbers")){
    require("./studying-projects/game-with-numbers/numbers-game.js");
}
if (body.hasClass("c13")){
    require("./studying-projects/c13/c13.js");
}
if (body.hasClass("mobile")){
    require("./studying-projects/mobile/mobile-project.js");
}
if (body.hasClass("basics")){
    require("./studying-projects/ingredients-choose/main-container.js");
}
if (body.hasClass("calculator")){
    require("./studying-projects/calculator/calculator.js");
}
if (body.hasClass("oughts-crosses")){
    require("./studying-projects/oughts-and-crosses/oughts-and-crosses.js");
}
if (body.hasClass("shop")){
    require("./studying-projects/online-shop/general.js");
}
if (body.hasClass("bright-food")){
  require("./studying-projects/bright-food/general.js");
}
if (body.hasClass("my-cv")){
  require("./studying-projects/cv/cv-ie.js");
}
if (body.hasClass("react-searching-form")){
  require("./studying-projects/react-searching-form/index.js");
}

if (body.hasClass("tic-tac-toe")){
  require("./studying-projects/tic-tac-toe/main.js");
}


