console.log("Running t08_introduction.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


var myVar = 0;
OUTPUT.innerHTML = "<p>Start: "+myVar+"</p><br>";

functionOne();
function functionOne() {
  myVar = 1;
  OUTPUT.innerHTML += "<p>functionOne: "+myVar+"</p><br>";
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  OUTPUT.innerHTML += "<p>functionTwo: "+myVar+"</p><br>";
}

OUTPUT.innerHTML += "<p>end: "+myVar+"</p><br>";
