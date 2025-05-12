// 2 ways to declare 1 literel or 2 constructor
// A singleton object is one where only one instance exists during the lifetime of the program. In JavaScript, a singleton can be created using an object literal or a constructor pattern that ensures only one instance is created.
//ex: Object.create

// object literals

// const mySym = Symbol("key1")

const jjk = {
    name: "Hitesh", //name - "name" string
    "full name" : "Koushik Panda",
    // [mySym]: "mykey1",   // Thsi how you define a symbol inside a object. [] refer to a symbol.
    age: 18,
    location: "jaipur",
    email: "hitesh@yahoo.com",
    isloggedin: false,
    lastloginDays: ["Monday","Saturday"]

}


// console.log(jjk.email)
// console.log(jjk["full name"])
// console.log(jjk[mySym])  //this is how define in console to get output of a symbol
// console.log(Object.getOwnPropertySymbols(jjk)); 
// console.log(Object.getOwnPropertySymbols(jjk))
// console.log(typeof jjk[mySym])

// jjk.email = "koushik.@yahoo.com"
// console.log(jjk.email)
// Object.freeze(jjk)
// jjk.email = "koushik@microsofrt.com"
// jjk.name = "cameron"
// console.log(jjk)

// //////////////////////////////////////////////********** */

// const sym1 = Symbol("id");
// const sym2 = Symbol("role");

// const user = {
//   name: "Hitesh",
//   [sym1]: 101,
//   [sym2]: "admin"
// };

// const symbolKeys = Object.getOwnPropertySymbols(user);
// console.log(symbolKeys); 

// console.log(user[sym1])
// console.log(user[symbolKeys[0]]); 
// console.log(user[symbolKeys[1]]);

// //////////////////////////////////////////////*************** */

 jjk.greeting = function(){
    console.log("Hello js user");
 }

 console.log(jjk.greeting())

 jjk.greetingtwo = function(){
    console.log(`Hello JJK students Mr.,${this.name}`);  // `` -symbol called backticks, string interpolation
 }

 console.log(jjk.greetingtwo())

 console.log(3+3)
 