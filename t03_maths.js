/****************************
Header here
****************************/
console.log("Running t03_introduction.js")

// Variables below
let age = 15;
let dollar = 5000;
let name = "axolotl";
const year = 2026
var answer;

/****************************
Main Code
****************************/
console.log("Hello, "+ name);
console.log("As of "+ year +" you are " + age,"years old");
answer = year - age;
console.log("If you have celebrated your birthday this year, you were born in " + answer);
answer = answer - 1;
console.log("If you haven't celebrated your birthday this year, you were born in " + answer);
answer = age + 10;
console.log("In ten years, you'll be " + answer + " years old");
console.log("Congratulations! You have "+ dollar +" dollars");
answer = dollar / 2;
console.log("You spend half of your money, now you have "+ answer);
answer = answer + 3;
console.log("Then you picked $3 on the ground, now you have " + answer);

/***************************
function
****************************/

