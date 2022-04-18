// Зураг 12.5: dom.js
// DOM-тай ажиллах жаваскрипт код.
var currentNode; // сонгогдсон зангилааг хадгална
var idcount = 0; // шинэ элементүүдэд давтагдахгүй id өгнө

// үзэгдэл баригчыг бүртгэж currentNode-д анхны утгыг олгоно
function start() {
  document.getElementById("byIdButton").addEventListener("click", byId, false);
  document.getElementById("insertButton").addEventListener("click", insert, false);
  document.getElementById("appendButton").addEventListener("click", appendNode, false);
  document.getElementById("replaceButton").addEventListener("click", replaceCurrent, false);
  document.getElementById("removeButton").addEventListener("click", remove, false);
  document.getElementById("parentButton").addEventListener("click", parent, false);
  
  // currentNode-д анхны утга олгож байна
  currentNode = document.getElementById("bigheading");
} // start функцын төгсгөл
  
// хуудас ачаалагдангуут start функцыг дуудна
window.addEventListener("load", start, false);

// id атрибутаар нь элементийг тодруулж сонгож авах
function byId() {
  if (target) switchTo(target);
}// byId функцын төгсгөл

// insertBefore дүрэм ашиглан сонгогдсон 
// элементийн өмнө параграф элемент оруулах
function insert() {
  switchTo(newNode);
} // insert функцын төгсгөл

// Сонгогдсон зангилаанд параграф зангилааг хүүхэд болгон нэмэх
function appendNode() {
  var newNode = createNewNode(document.getElementById("append").value);
  currentNode.appendChild(newNode);
  switchTo(newNode);
} // appendNode функцын төгсгөл

// Сонгогдсон байгаа зангилааг параграф зангилаагаар солих
function replaceCurrent() {
  var newNode = createNewNode(document.getElementById("replace").value);
  currentNode.parentNode.replaceChild(newNode, currentNode);
  switchTo(newNode);
} // replaceCurrent функцын төгсгөл

// Сонгогдсон байгаа зангилааг устгах
function remove() {
  if (currentNode.parentNode == document.body)
    alert("Can't remove a top-level element.");
  else {
    var oldNode = currentNode;
    switchTo(oldNode.parentNode);
    currentNode.removeChild(oldNode);
  }
}// remove функцын төгсгөл

// Сонгогдсон байгаа зангилааг эцгийг тодруулж сонгох
function parent() {
  var target = currentNode.parentNode;
  if (target != document.body) switchTo(target);
  else alert("No parent.");
} // parent функцын төгсгөл

// давтагдашгүй id болон өгөгдсөн текстийг агуулах параграф
// зангилааг үүсгэх туслах функц
function createNewNode(text) {
  var newNode = document.createElement("p");
  nodeId = "new" + idcount;
  ++idcount;
  newNode.setAttribute("id", nodeId); // newNode-д id олгож байна
  text = "[" + nodeId + "] " + text;
  newNode.appendChild(document.createTextNode(text));
  return newNode;
} // createNewNode функцын төгсгөл

// Одоогийн сонгогдсон байгаа элементийг шинэ currentNode-өөр солих туслах функц
function switchTo(newNode) {
  currentNode.setAttribute("class", ""); // remove old highlighting

  currentNode = newNode;
  currentNode.setAttribute("class", "highlighted"); // highlight
  document.getElementById("gbi").value = currentNode.getAttribute("id");
} // switchTo функцын төгсгөл
