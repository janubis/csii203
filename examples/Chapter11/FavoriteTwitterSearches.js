// Зур. 11.20 FavoriteTwitterSearchs.js
// түлхүүр/утга хослолыг ашиглан эрэмбэлэх, татаж авах
// HTML5 localStorage ба sessionStorage
var tags; // array of tags for queries

// Хуудсан дээр өмнөх хайлтуудыг ачаалах
function loadSearches()
{
	if ( !sessionStorage.getItem( "herePreviously"))
	{
	sessionStorage.setItem( "herePreviously", "true" );
	document.getElementById( "welcomeMessage" ).innerHTML =
	"Twitter-н хайсан дуртай зүйлүүд вэб хуудсанд тавтай морилно уу!";
	} // end if

	var length =localStorage.length; // key/value хосын тоо
	tags = []; // хоосон массив үүсгэх

	// бүх түлхүүрийг ачаалах
	for (var i = 0; i < length; ++i)
	{
		tags[i] = localStorage.key(i);
	} // for-н төгсгөл

	tags.sort(); // түлхүүрүүдийг эрэмбэлэх

	var markup = "<ul>"; // холбоос үүсгэх
	var url = "https://twitter.com/search?q=";
	// холбоосоор жагсаалт үүсгэх
	for (var tag in tags)
	{
		var query = url + localStorage.getItem(tags[tag]) ;
		markup += "<li><span><a href = '" + query + "'>" + tags[tag] +
		"</a></span>" +
		"<input id = '" + tags[tag] + "' type = 'button' " +
		"value = 'Засварлах' onclick = 'editTag(id '>" +
		"<input id = '" + tags[tag] + "' type = 'button' " +
		"value = 'Устгах' onclick = 'deleteTag(id) '>";
	} // end for

	markup += "</ul>";
	document.getElementById("searches").innerHTML = markup;
} //  function loadSearches төгсгөл
// localStorage-с бүх хосуудыг устгах
function clearAllSearches()
{
	localStorage.clear();
	loadSearches(); // хайлтыг асаалах
} // function clearAllSearches-н төгсгөл

//  localStorage руу шинэ хайлтыг хадгалах
function saveSearch()
{
var query = document.getElementById("query");
var tag = document.getElementById("tag");
localStorage.setItem(tag.value, query.value);
tag.value = ""; // оруулсан тагийг цэвэрлэх
query.value = ""; // query-н утгыг цэвэрлэх
loadSearches(); // хайлтыг ачаалах
} // function saveSearch-н төгсгөл

// localStorage-с тодорхой хосыг устгах
function deleteTag( tag )
{
localStorage.removeItem( tag );
loadSearches(); // хайлтыг ачаалах
} // function deleteTag-н төгсгөл

// Байгаа хайлтуудыг хэвлэх
function editTag( tag )
{
document.getElementById("query").value = localStorage[ tag ];
document.getElementById("tag").value = tag;
loadSearches(); // хайлтыг ачаалах
} // function editTag-н төгсгөл

// үзэгдлүүдийг бүртгүүлэх
function start()
{
var saveButton = document.getElementById( "saveButton" );
saveButton.addEventListener( "click", saveSearch, false );
var clearButton = document.getElementById( "clearButton" );
clearButton.addEventListener( "click", clearAllSearches, false );
loadSearches(); // өмнө нь байсан хайлтуудыг ачаалах
} // function start төгсгөл

window.addEventListener( "load", start, false )