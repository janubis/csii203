// Зураг 10.21: InitArray3.js
// Олон хэмжээст массивд анхны утга олгох.
function start()
{	
	var array1 = [ [ 1, 2, 3 ], // мөр 0
					[ 4, 5, 6 ] ]; // мөр 1
	var array2 = [ [ 1, 2 ], // мөр 0
					[ 3 ], // мөр 1
					[ 4, 5, 6 ] ]; // мөр 2
	
	outputArray(  array1, document.getElementById( "output1" ) );
	outputArray(  array2, document.getElementById( "output2" ) );
} // start функцын төгсгөл

// Массивын элементүүдийг дэлгэцлэх
function outputArray(  theArray, output )
{
	var results = "";

	// Нэг хэмжээст массиваар гүйх
	for ( var row in theArray ){
		results += "<ol>"; // Эрэмбэлэгдсэн жагсаалтыг эхлэх
		// Нэг хэмжээст массивын элементүүдээр гүйх
		for ( var column in theArray[ row ] ){
			results += "<li>" + theArray[ row ][ column ] + "</li>";
		} // дотоод for дууслаа

		results += "</ol>"; // Эрэмбэлэгдсэн жагсаалтын төгсгөл
	} // гадна for дууслаа.

	output.innerHTML = results;
} // outputArray функцын төгсгөл

window.addEventListener( "load", start, false );