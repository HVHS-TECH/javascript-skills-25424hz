/****************************
Header here
****************************/
console.log("Running t10_introduction.js")

// Variables below
let age = 15;
let dollar = 5000;
let year = 2026
var answer;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

/****************************
Main Code
****************************/
function start() {
    OUTPUT.innerHTML = "<br>"
    OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>"
    welcome()
    displayProduct("Chocolate Bar", 3.99);
    displayProduct("Chips", 2.99);
    displayProduct("Drink", 2.49);
}
/***************************
function
****************************/
function welcome() {
    OUTPUT.innerHTML += "<h3>Hello, " + userName + ", welcome to the shop</h3>";
}
function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>The " + _name + " is $" + _price + "</p>";
}
function getFormImput() {
    const NAME_FIELD = document.getElementById("start")
    let useName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>"
}