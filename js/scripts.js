var servTab = document.querySelectorAll(".service-option");
//var servContent = document.querySelectorAll(".service-description");


//window.onload(tabClick());
function horse(a) {
  "use strict";
  if (servTab[a].classList.contains("service-option-link")) {
    console.log("horse");
  }
}

function tabClick() {
  "use strict";
  var i=0;
  for ( i=0; i < servTab.length; i +=1) {
    servTab[i].addEventListener("click", horse(i));
}}