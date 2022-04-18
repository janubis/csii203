 // Зур. 10.18: search.js
// IndexOf дүрмээр массиваас хайх.
var a = new Array( 100 ); // Массивыг үүсгэх

// 0..198 хүртэлх тоогоор массивыг дүүргэх
for ( var i = 0; i < a.length; ++i )
{
	a[ i ] = 2 * i;
} // for-н төгсгөл

// "Search" товчийг дарахад дуудагдах функц 
function buttonPressed()
{
	// input text талбараас утга авах
	var inputVal = document.getElementById( "inputVal" );

	// result параграфийг барьж авах
	var result = document.getElementById( "result" );

	// Хайлт хийх түлхүүр утгыг input text талбараас авах
	var searchKey = parseInt( inputVal.value );
	var element = a.indexOf( searchKey );

	if ( element != -1 )
	{
		result.innerHTML = "Хайлтаас олдсон утгын индекс " + element;
	} // if-н төгсгөл
	else
	{
		result.innerHTML = "Утга олдсонгүй.";
	} // else-н төгсгөл
} // function buttonPressed-н төгсгөл

// searchButton-н click үзэгдлийг бүртгүүлэх
function start()
{
	var searchButton = document.getElementById( "searchButton" );
	searchButton.addEventListener( "click", buttonPressed, false );
} // function start-н төгсгөл
window.addEventListener( "load", start, false );