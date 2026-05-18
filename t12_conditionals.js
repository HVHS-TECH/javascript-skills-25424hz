/****************************
Header here
****************************/
console.log("Running t12_introduction.js")

// Variables below
var age;
var dollar
var userName;
let year = 2025;
var answer;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/****************************
Main Code
****************************/
function start() {
    OUTPUT.innerHTML = "<br>"
    OUTPUT.innerHTML += "<h2>Added by JavaScript</h2>"
    displayProduct("Chocolate Bar", 3.99);
    displayProduct("Chips", 2.99);
    displayProduct("Drink", 2.49);
    OUTPUT.innerHTML += "<br>"
    something();
    if (dollar>4) {
        OUTPUT.innerHTML += "<p>That's great, you can buy a $4 chocolate bar.</p>"
    }else if (dollar=4) {
        OUTPUT.innerHTML += "Wow you can just buy one $4 chocolate bar!"
    }else {
        OUTPUT.innerHTML += "<p>Holy hell, you cannot even afford a $4 chocolate bar!</p>"
    }
}
/***************************
function
****************************/
function displayProduct(_name, _price) {
    OUTPUT.innerHTML += "<p>The " + _name + " is $" + _price + "</p>";
}
function getFormInput() {
    const NAME_FIELD = document.getElementById("nameField");
    userName = NAME_FIELD.value;
    const AGE_FIELD = document.getElementById("ageField");
    age = Number(AGE_FIELD.value);
    const MONEY_FIELD = document.getElementById("moneyField")
    dollar = Number(MONEY_FIELD.value);
}
function something() {
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
