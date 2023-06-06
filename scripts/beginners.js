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

let students = [
    ["Alice", 25, "Math"], //i.e. Alice = 0 , 25 = 1 , Math = 2. rows data
    ["Kate", 28, "science"],
    ["charlie", 22, "History"]
];

console.log(students[0][2]); //output: Kate.

// column data = [  0,0 = Alice, 0, 1 = 25, 0, 2 = Math, 1,0 = kate , 1,1 = 28, 1,2 = science,  etc