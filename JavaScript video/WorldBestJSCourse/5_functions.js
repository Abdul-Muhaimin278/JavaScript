//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a time wants to find the sum of two numbers

// // 1st student

// var a = 5,
//   b = 10;

// var sum1 = a + b;
// console.log(sum1);

// // 2nd student

// var a = 15,
//   b = 15;

// var sum2 = a + b;
// console.log(sum2);

// // 3rd student

// var a = 55,
//   b = 15;

// var sum3 = a + b;
// console.log(sum3);

// lets make reusable code

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10));
// console.log(sum(15, 15));
// console.log(sum(55, 15));

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.

//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// function sum() {
//   var a = 5,
//     b = 10;
//   console.log(a + b);
// }

// Calling the function

// sum();

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".

// function greet(name) {
//   console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
// }
// greet("Ali");
// greet("Ahad");
// greet("Ahmed");
// greet("Abbas");

//! 1. Write a function to find the sum of two numbers with parameters.

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(6666, 3333);

//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

// var result = function sum(a, b) {
// 	console.log(a + b);
// };
// result(6666, 3333);

//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// var result = function (a, b) {
// 	console.log(a + b);
// };
// result(6666, 3333);

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number

// function sum(a, b) {
// 	return a + b;
// }

// var result = sum(5, 10);
// console.log("the result of sum of a and b is " + result);
// console.log(sum(5, 10));
// console.log(sum(15, 15));
// console.log(sum(55, 15));

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax(function () {
// 	// code to be executed
// })();

// var result = (function (a, b) {
// 	console.log(a + b);
// 	return a + b;
// })(5, 20);

// console.log("the result of sum of a and b is " + result);

// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, "+")); //output: 7
// console.log(calculator(8, 4, "-")); //output: 4
// console.log(calculator(10, 2, "/")); //output: 5

// function calculator(num1, num2, operator) {
// 	let result;

// 	switch (operator) {
// 		case "+":
// 			return num1 + num2;

// 		case "-":
// 			return num1 - num2;

// 		case "/":
// 			if (num2 === 0) {
// 				return "Can't divide with 0";
// 			} else {
// 				return num1 / num2;
// 			}

// 		default:
// 			return "No operator found";
// 			break;
// 	}
// }

// console.log(calculator(1, 2, "+"));
// console.log(calculator(8, 5, "-"));
// console.log(calculator(9, 3, "/"));

// const calculator = (num1, num2, operator) => {
// 	let result;

// 	switch (operator) {
// 		case "+":
// 			return num1 + num2;

// 		case "-":
// 			return num1 - num2;

// 		case "/":
// 			if (num2 === 0) {
// 				return "Can't divide with 0";
// 			} else {
// 				return num1 / num2;
// 			}

// 		default:
// 			return "No operator found";
// 			break;
// 	}
// };

// console.log(calculator(1, 2, "+"));
// console.log(calculator(8, 5, "-"));
// console.log(calculator(9, 3, "/"));

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.

// const isReverse = (str) => {
// 	let reverse = "";
// 	for (let char = str.length - 1; char >= 0; char--) {
// 		reverse = reverse + str[char];
// 	}
// 	return reverse;
// };

// console.log(isReverse("Abdul Muhaimin"));

// const pattern = () => {
// 	let pattern = "";
// 	for (let index = 0; index < array.length; index++) {
// 		const element = array[index];
// 	}
// };

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).

const isPalindrome = (str) => {
	let reverse = "";
	for (let char = str.length - 1; char >= 0; char--) {
		reverse = reverse + str[char];
	}
	// return reverse;
	// if (str === reverse) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// return str === reverse ? true : false;
};

console.log(isPalindrome("malayalam"));