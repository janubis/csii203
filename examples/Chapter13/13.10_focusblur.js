// Зураг 13.8: focusblur.js 
// focus болон blur үзэгдлүүдийг харуулах. 
var helpArray = [ "Энэ талбарт нэрээ оруулна уу.",
"нэр@домайн форматаар мэйл хаягаа оруулна уу.",
"Манай сайт таалагдсан бол сонгоно уу.",
"Сэтгэгдлээ бидэнд үлдээнэ үү.",
"Энэ товч нь формыг серверт илгээнэ.",
"Энэ товч нь формыг цэвэрлэнэ.", "" ];
 var helpText; 
 
 // helpTextDiv-ийг үүсгэж үзэгдлүүдийг бүртгэнэ 
 function init() 
 { 
 helpText = document.getElementById( "helpText" ); 
 
 // үзэгдлүүдийг бүртгэх 
 registerListeners( document.getElementById( "name" ), 0 ); 
 registerListeners( document.getElementById( "email" ), 1 ); 
 registerListeners( document.getElementById( "like" ), 2 ); 
 registerListeners( document.getElementById( "comments" ), 3 ); 
 registerListeners( document.getElementById( "submit" ), 4 );
 registerListeners( document.getElementById( "reset" ), 5 )
 
 var myForm = document.getElementById( "myForm" ); 
 myForm.addEventListener( "submit",
    function() 
    { 
        return confirm( "Илгээхдээ итгэлтэй байна уу?" );
    }, // нэргүй функцийн төгсгөл
    false ); 
 myForm.addEventListener( "reset",
     function() 
     { 
        return confirm( "Шинээр эхлэхдээ итгэлтэй байна уу?" );
     }, // нэргүй функцийн төгсгөл 
     false );
  } // init функцийн төгсгөл
 
 // үзэгдлүүдийг бүртгэхэд туслах хэрэгцээт функц
 function registerListeners( object, messageNumber ) 
 { 
  object.addEventListener( "focus", 
        function() { helpText.innerHTML = helpArray[ messageNumber ]; }, 
        false );
    object.addEventListener( "blur",
        function() { helpText.innerHTML = helpArray[ 6 ]; }, false );
} // registerListener функцийн төгсгөл

window.addEventListener( "load", init, false );


