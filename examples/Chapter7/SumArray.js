// Fig. 10.8: SumArray.js
// for ба for .. in ашиглан массивын элементүүдийн нийлбэрийг олох
function start()
{
	var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	var total1 = 0, total2 = 0;
	// Массивын элементүүдээр гүйх 
	// total1-д элемент бүрийн утгыг нэмээд хийх
	var length = theArray.length; // Давталтын өмнө массивын элементийн тоог авах
	for ( var i = 0; i < length; ++i )
	{
		total1 += theArray[ i ];
	} // for-н төгсгөл

	var results = "<h3>Индекс ашиглан нийт нийлбэр: " + total1 + "</h3>";
	// for... in ашиглан массивын элементүүдээр гүйх
	// total2-д элементүүдийг нэмээд хийх
	for ( var element in theArray )
	{
		total2 += theArray[ element ];
	} // for-н төгсгөл
	results += "<h3>for...in ашиглан нийт : " + total2 + "</h3>";
	document.getElementById( "output" ).innerHTML = results;
} // function start-н төгсгөл
window.addEventListener( "load", start, false );