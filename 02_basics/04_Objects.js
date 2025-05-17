// object singletone using constructors

// const tin = new Object() // Singletone object
const tin = { } // non singleton object object
tin.id="123abc"
tin.name="samay"
tin.isloggedin= false
// console.log(tin)

// const reguser={
//     email:"hmm@gmail.com",
//     userfullname:{
//             fullname:{
//                 firtsname:"Koushik",
//                 lastname:"Panda"
//         }
//     }
// }

// console.log(reguser.userfullname.fullname.firtsname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) //it is good for coding becuase it is ensure that all vaue will combile and give you a result. {} - target, and obj's are source.

// const obj3 = {...obj1,...obj2} // spread, 90% time it will use.
// console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
console.log(tin);

console.log(Object.keys(tin));
console.log(Object.values(tin));
console.log(Object.entries(tin)); // array inside array

console.log(tin.hasOwnProperty("isloggedin"))
console.log(tin.hasOwnProperty("islogged"))

// to check the property availabae or not






