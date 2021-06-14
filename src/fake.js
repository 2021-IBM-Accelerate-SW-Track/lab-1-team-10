//JavaScript

//Dynamic Typing

//The variable type can change at run time. can do num = 'hi'

//print statements

//console.log('Hello World');

//variables, stores data

var old = 'issues, don\'t use!';

let myName = 'Grace'; //let is now the industry standard for JS variables
//console.log(myName);

//constants. If you don't need to change it later, use a constant

const interestRate = 0.3;
const NUMBER_VALUE = 4;

//console.log(interestRate);

//primitives

//Strings, numbers, booleans, undefined, null

let str = 'String'; //String Literal

let num = 60; //Number Literal

let flag = true; //Boolean Literal

let unde = undefined;

let something = null;

//console.log(typeof(num));

//reference types

//Objects, Array, Function

let person = {

name: 'Grace',

age: 25,

favColor: null

};

//Dot notation

person.name = 'John';

//Bracket notation

person['age'] = 35;

//can use bracket notation for dynamic changes

let selection = 'favColor';

person[selection] = 'green'

//console.log(person);

//Arrays

let selectedColors = ['red', 'blue'];

//console.log(selectedColors[0]);

selectedColors.push('green');

selectedColors[3] = 2;

//console.log(selectedColors.length);

//Functions! Fundamental building block of JavaScript

function greet(firstName, lastName){

console.log(`Greetings ${firstName} ${lastName}`);

console.log(`${firstName} is your first name`)

}

function addFive(number){
    return number+5;
}

const addNum = (number, addValue) => number + addValue;
const addNum2 = function(number, addValue){

}

function greet(){

}

//greet('Tim', 'Smith');

function squared(num){

return num*num

}

//console.log(squared(7));

//Map! ****

//Arrays are very important in JS - a lot of built in functions that allow us to save time!

//How would you double the values in this array?

let singleArr = [1,2,3,4,5,6,7,8,9,10] //2,4,6,8,10,....

let singleArrEx1 = [1,2,3,4,5,6,7,8,9,10]

let singleArrEx2 = [1,2,3,4,5,6,7,8,9,10]

//well i can go through it with a for loop and set it to each one!

for (let i = 0; i < singleArr.length; i++){

singleArrEx1[i] = singleArrEx1[i]*2

}

console.log(`in place singleArrEx1: ${singleArrEx1}`)

//but this changes the array in place. What if I dont want to change the initial array? Maybe just make a new array and use the for loop above

let doubleArrFOR = []

for (let i = 0; i < 10; i++){
doubleArrFOR.push(singleArr[i]*2)
}

//console.log(`the for loop double arr is ${doubleArrFOR} and the single arr is ${singleArr}`)

//Woo! I doubled the array and kept the initial copy :) I'm done yay!

//HOWEVER, I'm lazy and I don't want to write that much code >:(

//I want you to double the array without changing the original and I want you to make it easier for me to read and maintain in the future!

//Use map!

//map(func)

//it is a built in function for arrays and the parameter it takes in is a function!

//(woah! I can pass functions!!?) yes!

let doubleArrMAP = singleArr.map((x) => x*2)

//console.log(`single array is ${singleArr} and double array is ${doubleArrMAP}`)

//You can see here that the this code is the same as the example above! it is clean and easy to manipulate in the future!

// you can write functions seperately!

const double = (x) => x*2

let doubleFunctionMAP = singleArr.map(double)
let str1 = "flower"

console.log("Hi there, what is your favorite " + str1 + " and cake")
console.log(`Hi there, what is your favorite ${str1} and cake`)


console.log(`the double function separately is the same: ${doubleFunctionMAP}`)



//wait so isn't this like a for each loop? Kinda...not really

//arr.forEach(func) uses that function for each element in the array - however,

//it DOES NOT have a return value. It goes through the array and does what it needs then it is done

//use it to get the sum of the array, change the values in place, but you will not be able to get a brand new array like in map

//ternary operators (fancy if else statement)

let x = 3

//         = if this is true, then this happens, else this happens

let isEven = (x % 2 === 0) ? 'yes, it is even' : 'no it is odd!';

console.log(isEven)