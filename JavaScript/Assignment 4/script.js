// 1. Write a function sayHello() that prints "Hello JavaScript".
function sayHello() {
  console.log("Hello");
}
sayHello();

// 2. Create a function add(a, b) that returns their sum and log the result.

function add(a, b) {
  return a + b;
}
console.log(add(12, 3));

// 3. Write a function with a default parameter name = "Guest" that prints "Hi <name>".

function defaultPara(name = "Guest") {
  console.log(`Hi ${name}`);
}
defaultPara("Niraj");

// 4. Use rest parameters to make a function that adds unlimited numbers.

function addUnlimited(...nums) {
  let sum = 0;
  //   nums.forEach((val) => {
  //     sum = sum + val;
  //     console.log(sum);
  //   });

  //   for (let i = 0; i < nums.length; i++) {
  //     sum = sum + nums[i];
  //   }
  //   console.log(sum);

  let ans = nums.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  console.log(ans);
}

addUnlimited(20, 10, 60, 50, 60);

// 5. Create an IIFE that prints "I run instantly!".
(function () {
  console.log("I run instantly");
})();

// 6. Make a nested function where the inner one prints a variable from the outer one.

function parent() {
  let a = 10;
  function child() {
    console.log(a);
  }
  child();
}

parent();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

let fruits = ["apple", "orange", "guava", "grapes", "mango"];
fruits.push("banana");
console.log(fruits);
fruits.shift();
console.log(fruits);

// 8. Use a for loop to print all elements of an array.

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for (const ele of arr) {
//     console.log(ele)
// }

// 9. Create an object person with keys name, age, and city, and print each key’s value.

let obj = {
  name: "Niraj",
  age: 20,
  city: "Giridih",
};
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.city);

for (const ele in obj) {
  console.log(obj[ele]);
}

// 10. Use setTimeout() to log "Time’s up!" after 2 seconds.

setTimeout(() => {
  console.log("Time's up!");
}, 2000);
