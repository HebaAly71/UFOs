// Printing a string with JavaScript
//console.log("Hello, world!");

// Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
//   }

//   printHello();

  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  doubleAddition(65,34);

  let addition = (a,b) => a+b;