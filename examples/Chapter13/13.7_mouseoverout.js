// Зураг 13.7: mouseoverout.js 
//mouseover ба mouseout үзэгдлүүд. 
	
function mouseOver( e ) 
{ 
	// гарчиг дээр хулгана хөдлөх үед гарчгийг ногоон өнгөтэй болгоно  
	if ( e.target.getAttribute( "id" ) =="header" ) 
	{ 
		e.target.setAttribute( "style", "color:green" ); 
	} // if төгсгөл 

	// хэрвээ элемент li бол түүний өнгөнд id атрибутынх нь утгыг өгнө 
	if ( e.target.tagName.toLowerCase() == "li" ) 
	{ 
		e.target.setAttribute( "style", 
			"color: " + e.target.getAttribute( "id" ) ); 
	} // if төгсгөл
} // mouseOver функцын төгсгөл
 
function mouseOut( e )
{ 
	// гарчигнаас хулгана холдох үед гарчгийг улаан өнгөтэй болгоно 
	if ( e.target.getAttribute( "id" ) =="header" ) 
	{ 
		e.target.setAttribute( "style", "color:red" ); 
	} // if төгсгөл

	// хэрвээ элемент li бол түүнээс хулгана холдох үед түүний id утгыг
	// агуулга текстэд нь оноож өгнө
	if ( e.target.tagName.toLowerCase() == "li" ) 
	{ 
		e.target.innerHTML = e.target.getAttribute( "id" ); 
	} // if  төгсгөл
} // mouseOut функцын төгсгөл

document.addEventListener("mouseover", mouseOver, false);
document.addEventListener("mouseout", mouseOut, false);