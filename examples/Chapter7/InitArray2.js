// Fig. 10.6: InitArray2.js
// Жагсаалтаар анхны утга олгох
function start()
{
// Анхны утга олгох жагсаалтаар элементийн тоо болон утга тодорхойлогддог.
	var colors = new Array( "cyan", "magenta","yellow", "black" );
	var integers1 = [ 2, 4, 6, 8 ];
    var integers2 = [ 2, , , 8 ];
	outputArray( "Өнгөний массив", colors,
	document.getElementById( "output1" ) );
	outputArray( "Бүхэл тоон массив1", integers1,
	document.getElementById( "output2" ) );
	outputArray( "Бүхэл тоон массив2", integers2,
	document.getElementById( "output3" ) );
} // end function start
	// 2 баганатай хүснэгт
	// "theArray"-н утга болон индекс
function outputArray( heading, theArray, output )
{
	var content = "<h2>" + heading + "</h2><table>" +
	"<thead><th>Индекс</th><th>Утга</th></thead><tbody>";
	// Массивын элемент бүрийн утга болон индексийг харуулж байна.
	var length = theArray.length; // Давталтаас өмнө массивын элементийн тоог авах
	for ( var i = 0; i < length; ++i )
	{
	content += "<tr><td>" + i + "</td><td>" + theArray[ i ] +
	"</td></tr>";
	} // end for
	content += "</tbody></table>";
	output.innerHTML = content; // Гаралтын элементүүдийг хүснэгтэнд байрлуулах
	} // function outputArray төгсгөл
window.addEventListener( "load", start, false );
