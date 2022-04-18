// Зур. 11.7: SearchingStrings.js
// Техтээс хайлт хийх indexOf ба lastIndexOf.
var letters = "Өвөл болох дөхөж байгаа учраас гадаа их хүйтэрч эхэллээ. Өвөл гадаа цас ордог.";

function buttonPressed()
{
	var inputField = document.getElementById( "inputField" );

	document.getElementById( "results" ).innerHTML =
	"<p>Хайж олсон эхний индекс " +
	letters.indexOf( inputField.value )+ "</p>" +
	"<p>Хайж олсон сүүлийн индекс " +
	letters.lastIndexOf( inputField.value )+ "</p>" +
	"<p>12-р индексээс хойших техтэн дотор хайж олсон эхний индекс " +
	letters.indexOf( inputField.value, 12 )+ "</p>" +
	"<p>12-р индексээс хойших техтэн дотор хайж олсон сүүлийн индекс " +
	letters.lastIndexOf( inputField.value, 12 )+ "</p>";
} // function buttonPressed-н төгсгөл
// searchButton-д click дүрэмд buttonPressed функцыг холбох
function start()
{
	var searchButton = document.getElementById( "searchButton" );
	searchButton.addEventListener( "click", buttonPressed, false );
} // end function start
window.addEventListener( "load", start, false );