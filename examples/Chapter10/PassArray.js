// Зур. 10.14: PassArray.js
// Массив болон массивын элементийг функцэд дамжуулах.
function start()
{
var a = [ 1, 2, 3, 4, 5 ];
// Бүх массивыг дамжуулах
outputArray( "Анхны массив: ", a,
	document.getElementById( "originalArray" ) );
modifyArray( a ); // Массивйг заагчаар дамжуулах
outputArray( "Өөрчлөгдсөн массив: ", a,
document.getElementById( "modifiedArray" ) );
// Массивын элементийг дамжуулах
document.getElementById( "originalElement" ).innerHTML =
"a[3]-г өөрлөгдөхөөс өмнө: " + a[ 3 ];
modifyElement( a[ 3 ] ); // Массивын a[3] элементийг утгаад дамжуулж байна.
document.getElementById( "modifiedElement" ).innerHTML =
	"a[3] өөрчлөгдсөний дараа: " + a[ 3 ];
} // function start()-н төгсгөл

// "theArray"-н агуулгыг хэвлэх
function outputArray( heading, theArray, output )
{
output.innerHTML = heading + theArray.join( " " );
} // function outputArray-н төгсгөл

// Массивын элементийг өөрчлөх функц
function modifyArray( theArray )
{
	for ( var j in theArray )
	{
	theArray[ j ] *= 2;
	} // end for
} // function modifyArray-н төгсгөл

// Дамжуулагдсан утгыг өөрчлөх функц
function modifyElement( e )
{
	e *= 2; // Дамжуулагдсан утгыг өөрчилж байна.
	document.getElementById( "inModifyElement" ).innerHTML =
"Өөрчлөгдсөн элементийн утга: " + e;
} // function modifyElement-н төгсгөл
window.addEventListener( "load", start, false )