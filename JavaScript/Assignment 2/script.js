// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
// Comparison, Logical, Bitwise)

// a. Create two numbers a = 10 and b = 3.
// Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a % b);

// b. Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x = x + 3;
x += 3;

x = x - 3;
x -= 3;
x = x * 3;
x *= 3;
x = x % 3;
x %= 3;

// c. let count = 5;
// Use count++ and log value before and after.
// Repeat for count–

let count = 5;
console.log(count);

count = count++;
console.log(count);

count = count--;
console.log(count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// Observe difference.

console.log(5 == "5"); //true because of not strict checking
console.log(5 === "5"); // flase because of strict checking

// e. Check if 10 is greater than 5, less than 20, and equal to 10.

console.log(10 > 5); //true
console.log(10 < 20); //true
console.log(10 == 10); //true

// f. Try logical AND and OR:
// true && false
// true || false
// !(true)

console.log(true && true); // true because  both are true
console.log(true || false); // true because one is true
console.log(!true); // false because NOT(opposite) of true is false

// g. Predict the result of:
// (5 > 3 && 10 > 8),
// (5 > 3 || 10 < 8)

console.log(5 > 3 && 10 > 8); //true because both condition are true
console.log(5 > 3 || 10 < 8); //true beacuse one condition is true

// h. Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

console.log(5 & 1);
console.log(5 | 1);

// 2. Variable Hoisting in JavaScript

// a. Predict output of:
console.log(c); //undefined beacuse of hoisting and var supports hoisting
var c = 10;

// b. Predict output of:
// console.log(d); //Error because let do not support hoisting
let d = 10;

// c. Predict output of:
test(); //print hello
function test() {
  console.log("Hello");
}
