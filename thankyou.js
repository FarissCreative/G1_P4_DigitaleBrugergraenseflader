console.log(myFunction);

alert("Dine oplysninger er gemt");


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
