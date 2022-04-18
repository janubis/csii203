// Зураг 13.12: bubbling.js 
// bubbling үзэгдлийн болиулах. 
function documentClick() 
{ 
	alert( "Та документ дээр дарлаа." );
} // documentClick функцийн төгсгөл

function bubble( e )
{
	alert( "bubble үзэгдэл ажиллана." );
	e.cancelBubble = false;
} // bubble функцийн төгсгөл

function noBubble( e )
{
	alert( "bubble үзэгдэл ажиллахгүй." );
	e.cancelBubble = true;
} // noBubble функцийн төгсгөл

function registerEvents()
{
	document.addEventListener( "click", documentClick, false );
	document.getElementById( "bubble" ).addEventListener(
		"click", bubble, false );
	document.getElementById( "noBubble" ).addEventListener(
		"click", noBubble, false );
} // registerEvents функцийн төгсгөл

window.addEventListener( "load", registerEvents, false );