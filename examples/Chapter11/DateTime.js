// Зур. 11.12: DateTime.js
// Date обьектын огноо болон хугацааны дүрмүүд .
function start()
{
	var current = new Date();

	// valueOf-н утгуудыг өөр өөрөөр хэвлэх
	document.getElementById( "strings" ).innerHTML =
	"<p>toString: " + current.toString() + "</p>" +
	"<p>toLocaleString: " + current.toLocaleString()+ "</p>" +
	"<p>toUTCString: " + current.toUTCString() + "</p>" +
	"<p>valueOf: " + current.valueOf()+ "</p>";

	// get дүрмүүд
	document.getElementById( "getMethods" ).innerHTML =
	"<p>getDate: " + current.getDate()+ "</p>" +
	"<p>getDay: " + current.getDay()+ "</p>" +
	"<p>getMonth: " + current.getMonth()+ "</p>" +
	"<p>getFullYear: " + current.getFullYear()+ "</p>" +
	"<p>getTime: " +current.getTime()+ "</p>" +
	"<p>getHours: " + current.getHours() + "</p>" +
	"<p>getMinutes: " + current.getMinutes()+ "</p>" +
	"<p>getSeconds: " + current.getSeconds() + "</p>" +
	"<p>getMilliseconds: " + current.getMilliseconds()+ "</p>" +
	"<p>getTimezoneOffset: " +current.getTimezoneOffset() + "</p>";

	// Date үүсгэх
	var anotherDate = new Date( 2019, 9, 13, 1, 5, 0, 0 );

	document.getElementById( "newArguments" ).innerHTML =
	"<p>Date: " + anotherDate + "</p>";

	// set дүрмүүд
	anotherDate.setDate( 31 );
	anotherDate.setMonth( 11 );
	anotherDate.setFullYear( 2019 );
	anotherDate.setHours( 23 );
	anotherDate.setMinutes( 59 );
	anotherDate.setSeconds( 59 );
	document.getElementById( "setMethods" ).innerHTML =
	"<p>Modified date: " + anotherDate + "</p>";
} // function start-н төгсгөл
window.addEventListener( "load", start, false );