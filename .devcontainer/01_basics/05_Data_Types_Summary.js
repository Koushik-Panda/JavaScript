//JavaScript is a dynamically typed language

// How to define Data Types - Based on data store on memory and access them

// Primitive and Non-OPrimitive





//Primitive Data Types - Call by value, Original Store in memeory only copy version we work with
//Ex:- String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Undefined - Variable declared but value not declared
// Symbol- It is used to make a value unique.
// BigInt - It's used to store a big number primarily used in research

const score = 100
const scoreValue = 100.3

//no difference in decimal and integer number is number

const isLoggedeIn = false
const OutsideTemp = null
let user;

//console.table([score, scoreValue, isLoggedeIn, OutsideTemp, user])

const id = Symbol(123)
const anotherID = Symbol(123)

console.log(id === anotherID)

const bigNumber = 2345678901277n
console.log(typeof bigNumber)

//Non Primitive or Reference Types - We allocate this type direcly to memeory

// Array -
// Object
// Function

// arrays ex:

const heros = ["Shaktimam","Nagraj", "Drona"]
let obj = {
    name: "koushik",
    age: 29

}



const myFunction = function(){
    console.log("Hello World")
}


// console.table([obj,myFunction])

// java script actuyal documentation echma script

//non premative typeof is fuction and fuction type of objectfunction

console.log(typeof id)

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.

