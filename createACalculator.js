/* Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.
Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50.
*/
const readline = require('readline-sync');

function absoluteValueCalculation(num) {
    return Math.abs(num);
 };

function powerCalculation(num, exponent) {
    return Math.pow(num, exponent);
};

function squareRootCalculation(num) {
    return Math.sqrt(num);
};

function maxAndMin(...num) {
    return [Math.max(...num),Math.min(...num)];
};
    
function intRangeGnerator(min, max) {
    min = Math.ceil(min); // if min isnt already whole, round up
    max = Math.floor(max); // take max value and round down to prevent going above upper limit

    //Math.random by itself only reutrns a decimal. ignores other arguments
    //need to use ceil and floor to create range.
    // min and max are parameters
    // turn range of Math.random into an integer between min and max
    // Inclusive ranges need one more step.
    // max - min doesnt account for both ends of the range. use max - min + 1 when I want inclusive integers.
    // once again Math.random does not return a whole integer, you MUST use floor to round it down.
    // multiplying stretches the range
    // adding min shifts the range starting at 0

    return Math.floor(Math.random() * (max - min +1)) + min;
}

function customRounding(num, decimals){
    let multiplier = Math.pow(10, decimals);
    let rounded = Math.round(num * multiplier) / multiplier;
    return rounded;
}

let choice = readline.question(`
Choose your operation: 
1 = Abs, 
2 = Pow,
3 = Sqrt
4 = Maximum and Minimum Finder
5 = Random Number Generator
6 = Custom Rounding
`);

if (choice === "1") {
    let num = Number(readline.question("Enter a number, preferably negative. "));
    console.log(absoluteValueCalculation(num));

} else if (choice === "2") {
    let num = Number(readline.question("Enter a base number. "));
    let exponent = Number(readline.question("Enter the exponent. "));
    console.log(powerCalculation(num, exponent));

} else if (choice === "3") {
    let num = Number(readline.question("Enter a number. "));
    console.log(squareRootCalculation(num));

    // input.split(",").map(Number); common method to turn a string into an array. however, this specifically only works for commas. regex could make this more universal.
    // try to learn regex for future applications

} else if (choice === "4") {
    let input = readline.question("Enter a few numbers separated by commas. "); // Number is not needed here since we convert string in next step
    let numArray = input.split(",").map(Number);                                //.map(Number) turns the string into an array of numbers
    console.log(maxAndMin(...numArray));

} else if (choice === "5") {
    let min = Number(readline.question("Enter the minimum value. "));
    let max = Number(readline.question("Enter the maximum value. "));
    console.log(intRangeGnerator(min, max));

} else if (choice === "6") {
    let num = Number(readline.question("Enter a number with any number of decimal places. "));
    let decimal = Number(readline.question("Enter how many decimal places to round to. "));
    console.log(customRounding(num, decimal));
}
