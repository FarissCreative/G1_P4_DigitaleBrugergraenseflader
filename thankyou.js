// Nicole og jonas
console.log(myFunction);

alert("Dine oplysninger er gemt");

//Variabler og funktioner er her erklæret og tildelt, dog virker det ikke da google har sat en stopfunktion for det
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome){
    $('#myAudioo').remove()
}
else {
    $('#myAudio').remove() // just to make sure that it will not have 2x audio in the background
}
function myFunction() {
  var x = document.getElementById("myAudio").autoplay;
  document.getElementById("applause").innerHTML = x;
}
