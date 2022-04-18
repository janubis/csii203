// Зур. 11.5: CharacterProcessing.js
// String-н charAt, charCodeAt, fromCharCode дүрмүүд
// toLowercase ба toUpperCase.
function start()
{
	var s = "МОНГОЛ";
	var s2 = "Ном Зохиол Сайн УНшаарай.";
	var result = "";
	result = "<p> '" + s + "' үгийн 0-р индексийн тэмдэгт бол " + s.charAt( 0 ) + "</p>";
	result += "<p> '" + s + "' үгийн 0-р индексийн тэмдэгтийн код  бол " +s.charCodeAt( 0 ) + "</p>";
	result += "<p>'" +String.fromCharCode( 1054, 1102,1091,1090,1085,1091,1091,1076 ) +
	"' нь 1054, 1102,1091,1090,1085,1091,1091,1076 гэсэн тэмдэгтүүдийн кодыг агуулж байна.</p>";
	result += "<p>'" + s2 + "'гэсэн өгүүлбэрийн бүх үсгийг жижигрүүлбэл </p><b>'" + s2.toLowerCase()+ "'</b>";
	result += "<p>'" + s2 + "'гэсэн өгүүлбэрийн бүх үсгийг томруулбал </p><b>'" + s2.toUpperCase()	+ "'</b>";

document.getElementById( "results" ).innerHTML = result;
} // end function start

window.addEventListener( "load", start, false );