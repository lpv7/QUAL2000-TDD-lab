/*
Lab Unit testing simple TDD with math functions
Starter file
Create the following functions as per the instructions below.
Create a folder named tests on the root folder 
then create a file named lab-TDD-starter.test.js
NOTE: The name of the functions have
to match the exported names mentioned at the end of this file
in order to pass the test cases.
To run the test cases, run the following command on your terminal:
node --test
*/

//add function
const add = (a, b) => {
  //ex: add(3,5) should return 5
  //write your code here
  return a + b; //return the result
};

//subtract function
const subtract = (a, b) => {
  //ex: subtract(5,9) should return -4
  //write your code here
  return a - b; //return the result
};

//multiply function
const multiply = (a, b) => {
  //ex: multiply (12, 9) should return 108
  //write your code here
  return a * b; //return the result
};

//divide function
const divide = (a, b) => {
  //ex: divide(55, 5) should return 11
  //Make sure to test for zero division should throw and error
  //write your code here
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b; //return the result
};

//modulas function
const modulas = (a, b) => {
  //ex: modulas(17,4) should return 1
  //write your code here
  if (b === 0) {
    throw new Error("Cannot divide/mod by zero");
  }
  return a % b; //return the result
};

//power function
const power = (a, b) => {
  //ex: power(2, 5) should return 32
  //write your code here
  return a ** b; //return the result
};

//square function
const squareRoot = (a) => {
  //Make sure that squareRoot a negative number should throw an error
  //ex: squareRoot(25) should return 5
  //write your code here
  if (a < 0) {
    throw new Error(
      "No complexity here! Cannot take the square root of a negative number"
    );
  }
  return Math.sqrt(a); //return the result
};

//floor function
const floor = (a) => {
  //ex: floor(15.3) should return 15
  //write your code here
  return Math.floor(a); //return the result
};

//ceiling function
const ceiling = (a) => {
  //ex: ceiling(15.3) should return 16
  //write your code here
  return Math.ceil(a); //return the result
};

////////////////////////////////////////

//export functions
//Please do not change the following line.

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
};
