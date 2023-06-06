// first class on javascript on 1st June 2023.
/*var
let
const*/

/*let num1 = 20;
let num2 = 10;
console.log(num1 + num2);

const num3 = 30;
const num4 = 250;
*/
// you can reassign a  variable
//you can't reasign a let or constant (const)


// Boolean
/*let num1 = 'joint';
let num2 = 10;
console.log(num1 + num2);
*/


//number 
/*let integerNumber = 20;
let floatNumber = 30.2345;
let float2 = 200;
console.log('intgerNmber, floatNumber, float2'); */

// String
/*
let name = 'John is a boy';
console.log('name');
*/

// changing  a value to  string
/*let number = 42;
let str = String(number);

console.log(str); // Output: "42"
*/
// Task: research on varaible.
/*
let A = 20;
let B = 20;
console.log(B > 10 && A < 10);
*/


/*let num = 20 >= 10;
console.log(num);
*/

/*
console.log(1 !== 1);  
console.log ('1' !==1);
console.log('1' === 1);
console.log('1' !==1);
console.log('1' != 1); false because we are only checking for the value when it is one equal sign. */

// console.log(1 != 1); 
// console.log(false == 0);
// console.log(true == 1);

/*ternary operators
 condition? expression1 : expression2
 example1
 let age = 25;
 let isAdult = age >=18? "Yes" : "No";
 console.log(isAdult);*/

/*example 2
let num1 = 100;
let num2 = 200;
let result = num1 > 200 ? "Yes" : "No";
console.log(result); */


// comma operator
/*
let person = [name = 'John',
    age = '30',
    job = 'web developer'
];
console.log(person);
*/
/*
let name = "John";
let age = "30";
let job = "web dev";
console.log(peson);
*/
/*
// for loop         date: 5th June 2023.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/


/*
//  for in loop
// example 1
person = { name = "James", age = 20, job = "web developer" };

for (let key in person) {
    console.log(person);
}
*/
/*
// Example 2
let person = {
    name: 'James',
    age: 25,
    city: "Yola"
};

for (let item in person) {
    console.log(item + ": " + person[item]);
}
*/

/*
// do while loop
// Example 1
let num = 0;
do {
    num++;
    console.log(num);

} while (num < 10);

*/


/*
// while loop 
// Example 1
let i = 0;
while (i < 10) {
    i++;
    console.log(i);

    break;
}
*/


// personal study on Array   6th June 2023.
// Example 1
/*

let names = ["Alice", "Bob", "Charlie"];
let numbers = [1, 2, 3, 4, 5];
let products = [{ name: "shirt", price: 20 }, { name: "shoes", price: 50 }];
*/
/*
// Example 2 using 'for' or 'forEach'. It enables to perform operations on each item individually or access specific elements based on conditions.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(function(number) {
    console.log(number);
});
*/

// Example 3  sorting and searching elements in ascending or descending order('sort') and searching for specific elements ('indexOf', 'includes',). These methodes are used for finding the maximum or minimum value of an array.
/*
let numbers = [5, 4, 8, 1, 4];

numbers.sort();
// console.log(numbers); //output: [1,4,4,5,8]

// console.log(numbers.indexOf(4)); //output: 1

console.log(numbers.indexOf(10)); //output: false or negative result

*/

// Example 4: storing and manipulating tabular data. Each row repsents an item and each column represents a property or attribute of that item.
/*
let students = [
    ["Alice", 25, "Math"], //i.e. Alice = 0 , 25 = 1 , Math = 2. rows data
    ["Kate", 28, "science"],
    ["charlie", 22, "History"]
];

console.log(students[0][2]); //output: Kate.

// column data = [  0,0 = Alice, 0, 1 = 25, 0, 2 = Math, 1,0 = kate , 1,1 = 28, 1,2 = science,  etc
*/

/*
// Javascript class  on 6th June 2023.
//  check array on MDN(frontend guys uses map and filter)

// Array
// using toString method

// Example 1

const color = ["red", "green", "blue", "purple"]; //
console.log(color.toString());
*/

/*
//join method
const color = ["red", "green", "blue", "gold"];
console.log(color.join("-")); //output: red-green-blue-gold.
*/

/*
// stack method (last in first out(LIFO)) using push
// Example 2
// push means to add soemthing to a stack
const color = ["red", "green", "blue", "gold"];
color.push("white");
console.log(color);
*/

/*
// Example 2
const color = [];
color.push = ("red", "green", "blue", "gold");
console.log(color);
*/
/*

//  pop method ... is used to remove and return the last element from an array. It modifies the original array by removing the last element and returns the removed element.

const color = [];
color.push = ("red", "green", "blue", "gold");
const removeColor = color.pop(); //
console.log(color, removeColor); // output:
*/

/*

// queue method follows the First-In-First-Out (FIFO) principle, meaning that the first element added is the first one to be removed.
// unshift () add in front of the array

const color = ["red", "green", "black", "gold"];
color.unshift("plang", "kate", 29, 11);
console.log(color);

*/

/*

// shift method to remove the list item of the array

const color = ["red", "blue", "black", "gold"];
color.shift()
color.unshift("plang", "kate", 29, 11);

console.log(color);

*/

/*
//rendering method
//reversed()
// example 1
const color = ["red", "blue", "black", "gold"]
console.log(color.reverse())
*/
/*
// example 2
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(value.reverse);
*/
/*
// sort() method
const value = [1, 2, 3, 6, 7, 6, 5, 4, 9];
console.log(value.sort());
*/

/*
const value = [c, b, a, z, d, r, s, m, n];
console.log(value.sort());
*/

/*
const color = ["red", "blue", "black", "gold"];
console.log(color.sort());
*/


/*
// compare method
const value = [10, 2, 30, 1, 5, 3, 6, 7, 6, 5, 4, 5, 6];
console.log(value.sort(compare));

function compare(val1, val2) {
    return val1 - val2
}
*/

// manipulation method
const color = ["red", "blue", "black", "gold"];
const totalColor = color.concat(["pink", "yellow"])
console.log(totalColor)