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

// ****************************************************
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

****************************************************
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

// manipulation method
const color = ["red", "blue", "black", "gold"];
const totalColor = color.concat(["pink", "yellow"])
console.log(totalColor)
*/

// *******************************************
// object and function class on June 8th, 2023.
//Object
/*
// Example 1
let user = {
    name: "James",
    age: 30,
    email: "jameswandiya@gmail.com",
    location: "Jos",
    blogs: ["night life in Jos wihtout Javascript", "Tech life sucks"]
};
console.log(user);

//using Dot Notation
// console.log(user.name);
console.log(user.age);
user.age = 50;
user.name = "Tunde";
console.log(user.age);
console.log(user.name);

// Bracket Notation
console.log(user['email']);
user['name'] = "Tunde";
user['age'] = 10;
console.log(user['name']);
console.log(typeof user);
console.log(user['age']);
*/


/*
// Example 2
// Add method 
let user = {
    name: "James",
    age: 30,
    email: "jameswandiya@gmail.com",
    location: "Jos",
    blogs: ["night life in Jos wihtout Javascript", "Tech life sucks"],
    login: function() {
        console.log('the user is login')
    },
    logout: function() {
        console.log('the user is logout')
    }

};
user.login(); // its a method
user.logout();

console.log(user);

*/

/*
// This method
// Example
let user = {
    name: "James",
    age: 30,
    email: "jameswandiya@gmail.com",
    location: "Jos",
    blogs: ["night life in Jos wihtout Javascript", "Tech life sucks"],
    login: function() {
        console.log('the user is login')
    },
    logout: function() {
        console.log('the user is logout')
    },
    logBlogs: function() {
        console.log(this.logBlogs);
        console.log('this user has written the following blogs');
        this.blogs.forEach(blogs => {
            console.log(blogs)
        })
    }
};
user.logBlogs();
// console.log(this) // Accessing the global variables
//when a method is called on an object, the this keyword within that method refers to the object on which the method is being called. This is known as the implicit binding of this.

*/
/*
//Array of objects
let blogs = [{
        title: 'night life in Jos without Js',
        like: 30
    },
    {
        title: 'night life',
        like: 200
    },
];
console.log(blogs);
*/

/*
// Example of array with two objects
let user = {
    name: "James",
    age: 30,
    email: "jameswandiya@gmail.com",
    location: "Jos",
    blogs: [{
            title: 'night life in Jos without Js',
            like: 30
        },
        {
            title: 'night life',
            like: 200
        },
    ],
    login: function() {
        console.log('the user is login')
    },
    logout: function() {
        console.log('the user is logout')
    },
    logBlogs: function() {
        console.log(this.logBlogs);
        console.log('this user has written the following blogs');
        this.blogs.forEach(blogs => {
            console.log(blogs.title, blogs.like)
        })
    }
};
user.logBlogs();
*/


/*
//Math object 

console.log(Math.PI);
console.log(Math.E);

const area = 7.9;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));
console.log(Math.log(area));

const random = Math.random();
console.log(Math.random);
console.log(Math.random(random * 100));
*/

/*

class on 13 June, 2023. 
*** primitive values are classified as data types that are(6): Number, string, boolean, null, undefined and symbol. 
***Reference values are classified  as object types(5). that are: object, array, function, Date.
// Primitive and reference 

// primitive this are stored in stack (fixed in memory and stored by value)
//reference are stored in heap(memory address of the value)
// to concatenate using template String and a back tick
let scoreOne = 10;
let scoreTwo = 20;
console.log(`scoreOne:${scoreOne}`, `scoreTwo:${ scoreTwo }`);
console.log(`my name is ${scoreOne} and `, `has a score:${scoreTwo}`);



//refernce 
let userOne = { name: "James", age: "30" }
let userTwo = userOne;
console.log(userOne, userTwo);

userTwo.age = 50;
console.log(userOne, userTwo);

*/

/*
// Example of primitive 
//Example 1
let num1 = 10;
let num2 = num1; //copying the value of num1 to num2
num2 = 20; //modifying the value of num2 does not affect num1
conole.log(num1); // ouput: 10
console.log(num2); //output: 20

//Example 2
let x = 10;
let y = x;
x = 30;
y = x;
y = 80;
console.log(y);
console.log(x);
*/

// Example of reference
//Example 1
/*
const person = {
    name: 'James',
    age: '30',
};
// creating a refernce to the object
const personTwo = person;
// modifying the referenced object
personTwo.age = 50;
personTwo.name = 'Chiding';
console.log(person.age);
console.log(personTwo.age);
console.log(person);
*/
/*
//Example 2
let p = {
    value: 40,
    // name: 'John',

}
console.log(p);
let x = p;
p.value = 100;
console.log(p.value);
console.log(p);
*/
// Function 19th June 2023.
// function declaration
// const speak = function() {
//     console.log("Good day")
// }
// sepak()
/*
//  argument and parameters
// Example 1
const talk = function(name) {
    console.log(`good day ${name}`)
}
talk("James")


// Example 2
const talk = function(job) {
    console.log(`I am a web ${job}`)
}
talk("dev")
*/
/*
// To Pass a value
// Example 1
const speak = function(name = "James", time = "night") {
    console.log(`good ${ time } ${ name }`);
}
speak('King', 'day')
*/
/*
//  Returning value
// Example 1
const calArea = function(radius) {
    let area = 3.14 * radius;
    return area;
}
const area = calArea(5)
console.log("area is:", area)
*/
/*
// Same thing in another way Example 2
const calArea = function(radius) {
    return 3.14 * radius;
}
const area = calArea(5)
console.log(area)
*/
/*
// Arrow function(=>) 
const calArea = (radius) => {
    return 3.14 * radius;
}
const area = calArea(5)
console.log(area);
*/
/*
// one argument does not require paranthesis
const greet = (name) => console.log("Hello," + name + "!");
greet("James");
*/
/*
const calArea = (radius) => 3.14 * radius;
const area = calArea(5);
console.log(`area is: {$area}`);
*/
/*
// Example 1
const bill = function(products, tax) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total
}
console.log(bill([10, 2, 65], 0.6))
*/

/*
// Class work
// arrow function method
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        totalgit += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 12], 0.2)); //10 * 0.2 + 10 // Output: 92.4
*/
/*
// call back function  20th June 2023.
const myFunc = (callbackFunction) => {
    let value = 50;
    callbackFunction(value);
};
myFunc(function(value) {
    console.log(value)
})
*/
/*
// using arrow function
const myFunc = (callbackFunction) => {
    let value = 50;
    callbackFunction(value);
};
myFunc((value) => {
    console.log(value);
})
*/
/*
//ForEach function(hof)
let people = ["James", "Kate", "Plangel", "Ahmad"];
people.forEach(function(person) {
    console.log(person)
})
*/
/*
//  using arrow function
let people = ["James", "Kate", "Plangel", "Ahmad"];
people.forEach(person => {
    console.log(person);
})
*/
/*
let people = ["James", "kernel", "plang", "Ahmad"];
const logPerson = (person, index) => {
    console.log(`${index}-Hello ${person}`)
};
people.forEach(logPerson)
*/
//Higher order function(HOF) consist of filter, sort, map, reduced and forEach

const companies = [
        { name: "company one", category: "finance", start: 2000, end: 2019 },
        { name: "company two", category: "retail", start: 1985, end: 2010 },
        { name: "company three", category: "finance", start: 1993, end: 2033 },
        { name: "company four", category: "retail", start: 2000, end: 2015 },
        { name: "company five", category: "finance", start: 1997, end: 2016 },
        { name: "company six", category: "finance", start: 2000, end: 2012 },
        { name: "company seven", category: "tech", start: 2000, end: 2012 },
        { name: "company eight", category: "tech", start: 2000, end: 2013 },
    ]
    /*
    const ages = [12, 4, 21, 14, 25, 61, 54, 51, 49, 44];
    //forEach
    companies.forEach(function(company) {
            console.log(company)
        })
        //filter
    let canDrink = [];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 21) {
            canDrink.push(ages[i])
        }
    }
    console.log(canDrink);
    */
    /*
    // shorter example
const ages = [12, 4, 21, 14, 25, 18, 54, 51, 49, 44];
const canDrink = ages.filter(function(age) {
    if (age >= 21) {
        return true;
    }
});
console.log(canDrink);
*/
    /*
    const ages = [18, 25, 11, 30, 20, 22];

    const canDrink = ages.filter(age => age >= 21);

    console.log(canDrink);
    */
    /*
const retailcompanies = companies.filter(function(company) {
    if (company.category === "retail") {
        return true;
    }
});
console.log(retailcompanies);
*/
    /*
    const retailCompanies = companies.filter(company => company.category === "retail");

    console.log(retailCompanies);
    */
    /*
    const financeCompanies = companies.filter(company => company.category === "finance");
    console.log(financeCompanies);
    */
    /*
    // company that lasted ten years
    const tenYearCompanies = companies.filter(company => company.end - company.start >= 10);
    console.log(tenYearCompanies);
    */
    /*
    // map is used to recreate a new array from an existing array
const companyNames = companies.map(company => company.category);
console.log(companyNames);
*/ // you can also check for name, category etc.
    /*
    const concateMap = companies.map(company => `${company.category}, ${company.name}`);

    console.log(concateMap);
    */
    /*
const concateMap = companies.map(company => company.end - company.start >= 10);
console.log(concateMap);

*/
    /*
    const ages = [16, 25, 36, 49, 64];
    const ageMap = ages.map(ages => Math.sqrt(ages));
    console.log(ageMap);
    */
    /*
    const timeMap = ages.map(ages => (age * 2));
    console.log(timeMap);
    */
    /*
    // sort is used to sort elements in an list of arrays
    const sortCompanies = companies.sort(function(a, b) {
        if (a.start > b.start) {
            return 1;
        } else if (a.start < b.start) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(sortCompanies);
    */

/*
    // using arrow function
const sortCompanies = companies.sort((a, b) => {
    if (a.start > b.start) {
        return 1;
    } else if (a.start < b.start) {
        return -1;
    } else {
        return 0;
    }
});

console.log(sortCompanies);
*/
// const ages = [21, 30, 42, 18, 25];

// const agesSum = ages.reduce((total, age) => total + age, 0);

// console.log(agesSum); // Output: 136
/*
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    agesSum += ages[i];
}
console.log(agesSum); // Output:
*/
// combine method
const combined = ages
    .map(age => age * 2)
    .filter(age => age => 40)
    /*
    const totalYears = companies.reduce {
        total,
        company) => total +
    }
    */