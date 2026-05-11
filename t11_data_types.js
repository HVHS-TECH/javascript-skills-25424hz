/****************************
Header here
****************************/
console.log("Running t11_introduction.js")

// Variables below
let age = 24;
let dollar = 5000;
var userName;
let year = 1989;
var answer;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Main Code
****************************/
function start(){ 
    OUTPUT.innerHTML = "<br>"
    OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>"
    welcome();
    displayProduct("Chocolate Bar", 3.99);
    displayProduct("Chips", 2.99);
    displayProduct("Drink", 2.49);
    OUTPUT.innerHTML += "<br>"
    gossip();
}
/***************************
function
****************************/
function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>The " +_name+ " is $" +_price+ "</p>";
}
function welcome() {
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<h3>Welcome to the snack shop, Mr./Ms. " +userName+ ".</h4>"
}
function gossip() {
    const NAME_FIELD = document.getElementById("nameField");
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML += "<h2>Hello, " + userName + "</h2>";
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
    OUTPUT.innerHTML += "<br>";
}