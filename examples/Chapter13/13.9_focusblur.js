// Зураг 13.9: focusblur.js
// focus болон blur үзэгдэл.
var helpArray = [ "Энэ талбарт нэрээ оруулна уу.",
"нэр@домайн форматаар мэйл хаягаа оруулна уу.",
"Манай сайт таалагдсан бол сонгоно уу.",
"Сэтгэгдлээ бидэнд үлдээнэ үү.",
"Энэ товч нь формыг серверт илгээнэ.",
"Энэ товч нь формыг цэвэрлэнэ.", "" ];
var helpText;

// helpTextDiv-ийг үүсгэж үзэгдлүүдийг бүртгэнэ
function init()
{
	helpText = document.getElementById( "helpText" );

	// үзэгдлүүдийг бүртгэх
	registerListeners( document.getElementById( "name" ), 0 );
	registerListeners( document.getElementById( "email" ), 1 );
	registerListeners( document.getElementById( "like" ), 2 );
	registerListeners( document.getElementById( "comments" ), 3 );
	registerListeners( document.getElementById( "submit" ), 4 );
	registerListeners( document.getElementById( "reset" ), 5 );
} // init функцийн төгсгөл

// үзэгдлүүдийг бүртгэхэд туслах хэрэгцээт функц
function registerListeners( object, messageNumber )
{
	object.addEventListener("focus",
		function(){ helpText.innerHTML = helpArray[ messageNumber ];},
		false );
	object.addEventListener( "blur",
	function() { helpText.innerHTML = helpArray[ 6 ]; }, false );
} // registerListeners функцийн төгсгөл

window.addEventListener( "load", init, false);

