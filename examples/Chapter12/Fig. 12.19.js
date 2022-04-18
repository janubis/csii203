// Зураг 12.19: coverviewer.js
// Анимейшнд динамик стайл ашиглах скрипт
var interval = null; // интервалын өөрчлөлтийг хадгална. 
var speed = 6; // анимейшны хурдыг тогтооно
var count = 0; // анимейшны үеэрх зургийн хэмжээ

// үндсэн зургийг хөдөлгөнд оруулахаар давтагдан дуудагдана
function run() 
{
  count += speed; 

  // зураг бүрэн хэмжээндээ очсон үед зогсоно
  if (count >= 375)
  {
    window.clearInterval(interval);
    interval = null;
  } // if төгсгөл
  
  var bigImage = document.getElementById("imgCover");
  bigImage.setAttribute( "style", "width: " + (0.7656 * count + "px;") + 
    "height: " + (count + "px;") );
} // run функцын төгсгөл

// анимейшны эхлэлд харгалзах зургийг үндсэн зургийн
// талбайд оруулна
function display(imgfile)
{
  if (interval) 
    return;
  
  var bigImage = document.getElementById("imgCover");
  bigImage.setAttribute("style", "width: 0px; height: 0px;");
  bigImage.setAttribute("src", "fullsize/" + imgfile);
  bigImage.setAttribute("alt", "Large version of " + imgfile);
  count = 0; // зургийн хэмжээг 0-ээс эхлүүлнэ
  interval = window.setInterval( "run()", 10);// анимейшн эхлэнэ
} // display функцын төгсгөл

// үзэгдэл боловсруулагчыг бүртгэх
function start()
{
  document.getElementById("jhtp").addEventListener(
    "click", function() { display("jhtp.jpg"); }, false );
  document.getElementById("iw3htp").addEventListener(
    "click", function() { display("iw3htp.jpg"); }, false );
  document.getElementById("cpphtp").addEventListener(
    "click", function() { display("cpphtp.jpg"); }, false );
  document.getElementById("jhtplov").addEventListener(
    "click", function() { display("jhtplov.jpg"); }, false );
  document.getElementById("cpphtplov").addEventListener(
    "click", function() { display("cpphtplov.jpg"); }, false );
  document.getElementById("vcsharphtp").addEventListener(
    "click", function() { display("vcsharphtp.jpg"); }, false );
} // start функцын төгсгөл

window.addEventListener("load", start, false);
