// Зур. 10.16: Sort.js
// sort дүрмээр массивыг эрэмбэлэх.
function start()
{
	var a = [ 10, 1, 9, 2, 8, 3, 7, 4, 6, 5 ];

	outputArray( "Массивын анхны элементүүд: ", a,
	document.getElementById( "originalArray" ) );
	a.sort( compareIntegers ); // Массивыг эрэмбэлэх
	outputArray( "Элементүүдийг өсөхөөр эрэмбэлэх: ", a,
	document.getElementById( "sortedArray" ) );
} // function start-н төгсгөл

// theArray-н агуулгыг харуулах
function outputArray( heading, theArray, output )
{
	output.innerHTML = heading + theArray.join( " " );
} // function outputArray-н төгсгөл

//  sort-г ашигласанг харьцуулах
function compareIntegers( value1, value2 )
{
	return parseInt( value1 ) - parseInt( value2 );
} // function compareIntegers-н төгсгөл
window.addEventListener( "load", start, false );