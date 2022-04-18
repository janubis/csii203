// Зураг 12.14: collections.js
// Холбоос цуглуулгыг харуулах скрипт код.
function processLinks() {

  var linksList = document.links; // хуудасны холбоосуудыг авах
  var contents = "<ul>";
  
  // холбоос бүрийг мөр тэмдэгтэд залгах
  for (var i = 0; i < linksList.length; ++i) 
  {
    var currentLink = linksList[i];
    contents += "<li><a href='" + currentLink.href + "'>" +
      currentLink.innerHTML + "</li>";
  }// for төгсгөл

  contents += "</ul>";
  document.getElementById("links").innerHTML = contents;
} //processLinks функцын төгсгөл

window.addEventListener("load", processLinks, false);
