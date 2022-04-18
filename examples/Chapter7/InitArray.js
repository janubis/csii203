// Fig. 10.4: InitArray.js
// 2 массив үүсгээд анхны утгуудыг олгож дэлгэцэнд харуулах
function start()
{
	var n1 = new Array( 5 ); // Массивийн 5 элементэд санайх хуваарилж байна.
	var n2 = new Array(); // Хоосон массиь зарлаж байна.
	// n1 массивын элемент бүрт утга олгож байна
	var length =n1.length; // Давталт хийхийн өмнө мөссивийн элементийн уртыг авч байна. 
	for ( var i = 0; i < length; ++i )
	{
		n1[ i ] = i;
	} // for давталтын төгсгөл
	// n2 массивын 5 утгад утга хийж өгч байна.
	for ( i = 0; i < 5; ++i )
	{
		n2[ i ] = i;
	} // for давталтын төгсгөл
	outputArray( "Массив n1:", n1, document.getElementById( "output1" ) );
	outputArray( "Массив n2:", n2, document.getElementById( "output2" ) );
	} // function start-н төгсгөл
	// 2 баганатай хүснэгт гаргах
	// "The Arrray" -ын индекс ба элементүүдийг агуулсан.
	function outputArray( heading, theArray, output )
	{
		var content = "<h2>" + heading + "</h2><table>" +
		"<thead><th>Индекс</th><th>Утга</th></thead><tbody>";
		// Массивын элемент бүрийн утга ба индексийг гаргаж байна.
		var length = theArray.length; //Давталт хийхийн өмнө мөссивийн элементийн уртыг авч байна.
		for ( var i = 0; i < length; ++i )
		{
			content += "<tr><td>" + i + "</td><td>" + theArray[ i ] +
			"</td></tr>";
		} // for давталтын төгсгөл
		content += "</tbody></table>";
		output.innerHTML = content; // Гаралтын элементүүдийг хаснэгтэнд байрлуулж байна.
	} // function outputArray-н төгсгөл

window.addEventListener( "load", start, false );