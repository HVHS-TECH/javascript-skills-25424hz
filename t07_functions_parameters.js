/****************************
Header here
****************************/
console.log("Running t07_introduction.js")

// Variables below
const OUTPUT = document.getElementById("spaceForJavaScriptOutput")

/****************************
Main Code
****************************/
OUTPUT.innerHTML = "<br>"
OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>"
OUTPUT.innerHTML += "<h3>Welcome to the Snack Shop</h3>"

welcome();
displayProduct("Chocolate Bar", 3.99);
displayProduct("Chips", 2.99);
displayProduct("Drink", 2.49);

/***************************
function
****************************/
function welcome() {
    OUTPUT.innerHTML += "<p>Hello, " +userName+ ", welcome to the shop</p>";
}
function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>The " +_name+ " is $" +_price+ "</p>";
}
