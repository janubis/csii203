// Зураг 12.16: dynamicstyle.js
// Динамик стайлыг харуулах жаваскрипт код.
function start()
{
	var inputColor = prompt( "Хуудасны дэвсгэр өнгийг өөрчлөх " +
		"өнгөний нэрийг оруулна уу", "" );
	document.body.setAttribute( "style",
		"background-color: " + inputColor );
} // end function start

window.addEventListener( "load", start, false );

