import $ from '../../vendor/jquery.min.js';

let parent = $(".cv_cenralization");


navigator.sayswho= (function(){
  var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
    tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE';
  }
  if(M[1]=== 'Chrome'){
    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

function renderColumns(column,array){
  parent.append(column);
  array.map((section) => {
    $(section).appendTo(column);
  });
}
let width = $(window).innerWidth();

function displayOnSize(){
  if (navigator.sayswho === 'IE' ) {
    width  = $(window).innerWidth();
    if (width > 760 && width <= 960) {
      parent.css({"display":"block"});
      let first = $("<div class=\"first-column\"></div>");
      let second = $("<div class=\"second-column\"></div>");
      let sectionsForFirstColumn = [".general-info", ".skills", ".hobbies", ".prj-bright-food", ".prj-calender", ".prj-to-do-app"];
      let sectionsForSecondColumn = [".contacts",".techniques",".education",".experience",".languages",".prj-online-shop",".prj-mobile",".prj-form-c13",".prj-game"];
      renderColumns(first,sectionsForFirstColumn);
      renderColumns(second,sectionsForSecondColumn);
    } else if ( width > 960) {
      parent.css({"display": "block"});
      let first = $("<div class=\"first-column\"></div>");
      let second = $("<div class=\"second-column\"></div>");
      let third  = $("<div class=\"third-column\"></div>");
      let sectionsForFirstColumn = [".general-info",  ".languages", ".prj-calender",".prj-form-c13"];
      let sectionsForSecondColumn = [".contacts", ".techniques", ".hobbies", ".prj-bright-food",  ".prj-mobile", ".prj-game"];
      let sectionsForThirdColumn = [ ".education",".experience",".skills",".prj-online-shop", ".prj-to-do-app"]
      renderColumns(first, sectionsForFirstColumn);
      renderColumns(second, sectionsForSecondColumn);
      renderColumns(third, sectionsForThirdColumn);
    }
  }
}

$(document).ready(function(){
  displayOnSize();
});

$(window).on("resize",function(){
  displayOnSize();
});





// $(window).on('resize', function(){
//   var win = $(this); //this = window
//   if (win.height() >= 820) { /* ... */ }
//   if (win.width() >= 1280) { /* ... */ }
// });