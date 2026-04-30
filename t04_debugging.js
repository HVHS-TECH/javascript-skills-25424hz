/****************************
Header here
****************************/
console.log("Running t04_introduction.js")

// Set up the size of the page.
let length = 2;
let width = 6;

// calculate the area
let area = length * width;

// calculate the perimeter
let perimeter = 2 * length + 2 * width; 

// Display the results
console.log("An area of a piece of paper with a length of "+length+", and a width of "+width+" is "+ area)
console.log("The same piece of paper has a perimeter of "+perimeter)

// Check, does this result look sensible
if (perimeter < area){
    console.log("Yay, your area is larger, this is right for this example")
}else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example")
}