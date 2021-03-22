const prompt = require("prompt-sync")({ sigint: true }); //the sigint:true enables us to break the code
/*  Breaking a while loop without using break
    A guess game that ends when you press END
*/
let keepgoing = Math.floor(Math.random() * 10);
while (keepgoing) {
  let userNum = parseInt(prompt("Guess a number: "));
  if (userNum != keepgoing) {
    console.log("keep Going");
    input = prompt("Are you tired? Do you want to quit? If yes, type END: "); //converting lowercases to uppercase

    if (input === "END") {
      keepgoing = false;
    }
  }
}

// Function
//Function Declaration
function bag1() {
  console.log("My nickname is AminatCanCode");
}

bag1(); //function call

// console.log("My nickname is AminatCanCode");

// declaring a variable to be a function
let num1 = 6;
let yourName = "Benedict";
let myBag = bag1();
console.log(myBag);

// Another method of declaring a function
const bag = () => {
    let name = "AminatCanCode";
  console.log(`Hello ${name}`);
};
bag1();
bag();
console.log("My nickname is AminatCanCode");

// // working with arguments and parameters

const funct = (name, course, level = 500) => {
  let name1 = "Benedict";
  let course2 = "Architecture";
  console.log(`Hello ${name} ${course} ${level}`);
  return true;
};
// funct("Benedicting", "Architecture");
// function call
funct("AminatCanCode", "Software Engineering");

// // function to sum two numbers
const sum = (a, b) =>{
    let x = a + b;
   return console.log(`The sum of ${a} and ${b} is: ${x}`);
    // return true;
};
sum(8,3);

// // Declare a function (product) that works with the user's input

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
const prod = (num1, num2) => {
    let product = num1 * num2;
    return console.log(`The product of ${num1} and ${num2} is: ${product}`);
};

// prod(num1, num2);

// assigning default values to parameters
const subtract = (a = 10, b = 2) => {
     let difference = a - b;
     return console.log(`The difference of ${a} and ${b} is: ${difference}`)
};

// /* task 3
// MongoDB, React, Node, Express
// */

// let name = prompt("What is your Name: ");
const formClass = (name, course = "React") => {
    return console.log(`Hello ${name} you've registered for ${course}`);
    console.log("My name is " +name+ " And my course is " + course);
};
// formClass(name, "Node");
