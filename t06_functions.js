/****************************
Header here
****************************/
console.log("Running t05_introduction.js")

// Variables below
let age = 15;
let dollar = 5000;
let name = "axolotl";
let year = 2026
var answer;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

/****************************
Main Code
****************************/
OUTPUT.innerHTML = "<br>"
OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>"
OUTPUT.innerHTML += "<p>Hello, " + name + "</p>";
OUTPUT.innerHTML += "<p>As of " + year + ", you are " + age + " years old.</p>";
answer = year - age;
OUTPUT.innerHTML += "<p>If you have celebrated your birthday this year, you were born in " + answer + "</p>";
answer = answer - 1;
OUTPUT.innerHTML += "<p>If you haven't celebrated your birthday this year, you were born in " + answer + "</p>";
answer = age + 10;
OUTPUT.innerHTML += "<p>In ten years, you'll be " + answer + " years old</p>";
OUTPUT.innerHTML += "<p>Congratulations! You have " + dollar + " dollars</p>";
answer = dollar / 2;
OUTPUT.innerHTML += "<p>You spend half of your money, now you have $" + answer + "</p>";
answer = answer + 3;
OUTPUT.innerHTML += "<p>Then you picked $3 on the ground, now you have $" + answer + "</p>";

welcome()

/***************************
function
****************************/
function welcome() {
    OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
}
