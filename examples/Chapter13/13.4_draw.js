// Зураг 13.4: draw.js 
// Энгийн дүрс зурах програм. 
// Хүснэгтэд нүднүүд оруулах функц  
function createCanvas() 
{
	var side = 100; 
	var tbody = document.getElementById( "tablebody" ); 

	for ( var i=0; i < side; ++i ) 
	{ 
		var row = document.createElement( "tr" ); 

		for ( var j=0; j < side; ++j ) 
		{ 
			var cell = document.createElement( "td" ); 
			row.appendChild( cell ); 
		} // for төгсгөл 

		tbody.appendChild( row ); 
	} // for төгсгөл

	// хүснэгтийн хулганын хөдөлгөөн сонсогчыг бүртгэх  
	document.getElementById( "canvas" ).addEventListener( 
	"mousemove", processMouseMove, false );
} // createCanvas функцын төгсгөл

// onmousemove үзэгдэл дээр процесс
function processMouseMove( e ) 
{ 
	if ( e.target.tagName.toLowerCase() == "td" ) 
	{ 
		// Ctrl товч дарагдсан үед нүдийг цэнхэр болгох 
		if (e.ctrlKey) 
		{ 
		e.target.setAttribute( "class", "blue" );
		} // end if 
 
		// Shift товч дарагдсан үед нүдийг улаан болгох
		if (e.shiftKey) 
		{ 
			e.target.setAttribute( "class", "red" );
		} // if төгсгөл 
	} // if төгсгөл
} // processMouseMove функцын төгсгөл 

window.addEventListener( "load", createCanvas, false );

