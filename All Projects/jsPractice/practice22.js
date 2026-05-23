const number1 = prompt("Enter the first number:");
const number2 = prompt("Enter the second number:");
const number3 = prompt("Enter the third number:");
const result = number1>number2 && number1>number3 ? number1 : number2>number1 && number2>number3 ? number2 : number3;
console.log("The largest number is: " + result);