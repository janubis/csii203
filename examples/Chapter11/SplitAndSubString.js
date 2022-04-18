// Зур. 11.9: SplitAndSubString.js
// String обьектын split ба substring дүрмүүд.
function splitButtonPressed()
{
	var inputString = document.getElementById( "inputField" ).value;
	var tokens = inputString.split( " " );

	var results = document.getElementById( "results" );
	results.innerHTML = "<p>Үгүүдэд тасалсан өгүүлбэр: </p>" +
	"<p class = 'indent'>" +
	tokens.join( "</p><p class = 'indent'>" )+ "</p>" + 
	"<p>Өгүүлбэрийн эхний 10 тэмдэгт: </p>" +
	"<p class = 'indent'>'" + inputString.substring( 0, 10 ) + "'</p>";
} // function splitButtonPressed-н төгсгөл

// searchButton функцыг click үзэгдэлд бүртгүүлэх
function start()
{
	var splitButton = document.getElementById( "splitButton" );
	splitButton.addEventListener( "click", splitButtonPressed, false );
} // function start-н төгсгөл

window.addEventListener( "load", start, false );