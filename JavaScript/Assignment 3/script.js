// Level 1 – Pure Beginner Practice
// 1 - print numbers from 1 to 10
//  loop from 1 to 10 and print each numbers .

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2 - print only even numbers from 1 to 20
// use loop and conditions to print even ones .
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 3 - print numbers from 10 to 1 reverse
// loop with a decrement .

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// 4 - print the word "yes" 5 times repeat using a loop
for (let i = 1; i < 6; i++) {
  console.log("Yes");
}
// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`${i} : Even`);
  } else {
    console.log(`${i} : Odd`);
  }
}
// 6.ask user for a number and say if its  positive or negative
// use prompt() and a condition

let num = prompt("Enter a number");
// let num = +prompt("Enter a number"); // we can add + before prompt to change strings into numbers
let newNum = Number(num);

if (newNum >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = +prompt("Age bataoo");
if (age >= 18) {
  console.log("Vote de jaa ke");
} else {
  console.log("Tu bachha hai abhi");
}

//Validation(Ok, Cancel, Strings)

let age2 = prompt("Age bataoo");
if (age2 == null) {
  console.error("You Press Cancel");
} else {
  if (age2.trim() === "") {
    console.error("Age Daal bhai");
  } else {
    age2 = Number(age2.trim());
    if (isNaN(age2)) {
      console.error("Number dal de bhai");
    } else {
      console.log("Number hai");
    }
  }
}

// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X 5 = ${5 * i}`);
}

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count = 0;
for (let i = 1; i <= 15; i++) {
  if (i > 8) {
    count++;
  }
}
console.log(count);

// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.
