//++++++++++++++++++++++++++++++01+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const id = 1226341 //const use for permanently assigned, can't chnage
// // const id =122234

// const { captureOwnerStack } = require("react")

// const { StrictMode } = require("react")

// console.log(id)

// let iam = 111122222 // let use for temporary assigned, can change
// iam = 1122333

// console.log(iam)

//+++++++++++++++++++++++++++++++++++++++++02+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// "use strict"  if it is enable then in output it shows bad practice
//               special directive in JavaScript that tells the browser (or Node.js) 
//               to run your code in Strict Mode — a safer, cleaner version of JavaScript.

// acoountEmail="koushik2334@gmail.com" // it is way of define variable but it's generally considered bad practice.
// console.log(acoountEmail)

// console.log(3+3)

// console.log("Koushik")

// let name = "Koushik"
// let age = 29
// let addrees

// console.table([name, age, addrees])



// null is use for inteaonally empty. If some dat come after then store in null varible
// with null value you can store any type of value in null variable.
//ex:

// let a = null
// console.log(a)

// a = {name:"clark", age:29}
// console.log(a)


// let s
// let t = Number(s)
// let c=5

// console.log(typeof s)
// console.log(typeof t)
// console.log(typeof c)

// let no = "3a"
// console.log(typeof no)

//++++++++++++++++++++++++++++++++++++++++++++++03+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let score = "33" 
// let scores = "11bb"
// console.log(typeof score);
// console.log(typeof(score));


// let valueInNumber = Number(score) // it converts any number written in "" then it converts toa  number
// let valuesInNumber = Number(scores) // it tries to convert number and letter which is written in "" but hence 2 types of data here os it cannot convert 
//It's full that's why in typeof it shows NaN - Not a Number

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// console.log(typeof valuesInNumber); 

// let isLoggedIn = "kk"
// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)


// let a = 1
// let c = Boolean(a)
// console.log(c)

// let b = 0
// let d = Boolean(b)
// console.log(d)


// let e = " "
// let f = Boolean(e)
// console.log(f)

// let g = "Koushik"
// let h = Boolean(g)
// console.log(h)


// let someNumber = 22
// let stringNum = String (someNumber)
// console.log(stringNum)
// console.log(typeof stringNum)

// let value = 4
// let negValue = - value
// console.log(negValue)

// let str1 = "Hello"
// let str2 = "Hitesh"
// let str3 = str1+str2
// console.log(str3)

// console.log("1"+2+4+5) // after string all the number just sit after this
// console.log(1+4+5+"2") // bnefore string all the number will execute and then string will just sit


// console.log(+"")

// let somenumb = "42"
// let propernumb = + somenumb //use of + instea Number , can use +
// console.log (propernumb)
// console.log (typeof propernumb)

// let gamecunter = 102
// let fry = ++gamecunter   //before ++ use means it increases the value, then show the output
// let cry = gamecunter++   //after ++ use me means it first does not increase value because it sees the variable and gives output
// console.log(gamecunter)
// console.log(cry)
// console.log(fry)

//++++++++++++++++++++++++++++++++++++++++++++04++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)

// console.log(null>0)
// console.log(null>=0)
// console.log(null==0)
// console.log(null<0)
// console.log(null<=0)

// console.log(1>1)

// console.log("2"===2) // use strict coding
// console.log("2"==2)  // use normal coding where it converts "2" into 2

// const id = Symbol(123)
// const anotherID = Symbol(123)

// console.log(id === anotherID)

//+++++++++++++++++++++++++++05+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const score= 100
// const scoreValue = 100.3
// console.log(typeof score)       // it does not differentiate between integer and float
// console.log(typeof scoreValue)

// "use Strict"
// const score= 100
// const scoreValue = 100.3

// console.log(typeof score) 
// console.log(typeof scoreValue) 

// after "use strict", it does not change anything

// let user = "koupan"
// const id = 113425
// const role_no = 12
// let subject = "Automation"
// let dept;

// console.log(user)

// console.table([user, id, role_no, subject, dept])

// const bigNumber = 22341234n //n means it falls in thje bigint => Big Integer
// console.log(typeof bigNumber)

//Arrays :-

// const atma = ["sak", "ti", "man"];
// console.log(typeof atma)

// const yaa = {
//     name: "yoyo",
//     nunum: 784
// }

// console.log(typeof yaa)

// const myFunction = function () {
//     console.log("Hello World")
// }

// console.log(typeof myFunction)


// console.table()

// const id = Symbol(123)
// console.log(typeof id)

// let myYoutube = "KoushikPanda"
// myAnothername=myYoutube
// myAnothername = "Don_Pablo" // let => you can reassign

// console.log(myYoutube)
// console.log(myAnothername)


// const myYoutube = "KoushikPanda"
// const myAnothername=myYoutube
// myAnothername = "Don_Pablo" // const => you cannot reassign because of constant.

// console.log(myYoutube)
// console.log(myAnothername)

//______________________________

// all of this heap memory

// let obj5 = {user:"gol"}
// let three = obj5
// three.user="gogo"

// console.log(obj5)
// console.log(three)

//++++++++++++06+++++++++++++++++++++++++//

// const user = "Koushik"
// const repo = 22
// console.log(user+repo+"crime")
// console.log(`Hello, my name is ${user} and I am ${repo}`)

// const high = new String ("KoushikKp")

// console.log(high)
// console.log(high[0])
// console.log()
// console.log(high.toUpperCase())
// console.log(high.length)

// console.log(high.charAt(5))
// console.log(high.indexOf("p"))

// const derlop = high.slice(-7,3) //.substring(0,4) //This is one way
// console.log(derlop)
// // console.log(derlop.slice(2,4)) //This is one way

// const gameName = new String ('KoushikKp')
// const anotherString = gameName.slice(-8, 4)
//  console.log(anotherString) 


// const st= "     ccc     "
// console.log(st.trim())

// const url = "https://www.flower-crime.com"
// console.log(url.replace("-","*"))

// console.log(url.includes("flower"))
// console.log(url.includes("flowers"))

//checking if includes string present or not

// const string2 = "Koushik Monstrus Panda"
// console.log(string2.split(" "))



// +++++++++++++++++07++++++++++++++++++++++++++++

// const score = 400
// console.log(typeof score)

// const balance = new Number (100)
// console.log(balance)
// let b=balance.toString()
// console.log(typeof b)

// console.log(balance.toFixed(2))

// const otherumber = 23.45673
// console.log(otherumber.toPrecision(5))

// const hundred = 1000000000000
// console.log(hundred.toLocaleString('en-in'))


// console.log(Math.sqrt(4))
// console.log(Math.abs(-6))
// console.log(Math.round(4.4)) // output - 4 // best
// console.log(Math.round(4.5)) // output - 5 // best
// console.log(Math.ceil(4.1)) // output - 5
// console.log(Math.floor(4.7)) // output - 4
// console.log(Math.min(2,3,1,4,5,))
// console.log(Math.max(2,3,1,4,5,))
// console.log(Math.random(2,3,1,4,5,))

// console.log(Math.round(Math.random()*10)+1)

// let min = 97
// let max = 100

// console.log(Math.floor(Math.random()*(max-min))+min)

//++++++++++++++++++++08+++++++++++++++++++

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString('en-in',{
//     timeZone:"Asia/Kolkata"
// }))

// console.log(myDate.toLocaleString("en-IN"))

// console.log(myDate.toISOString())

// console.log(myDate.toLocaleDateString("en-in"))

console.log(typeof myDate)

let myCreateDate = new Date("01,02,2025")
// console.log(myCreateDate.toLocaleDateString("en-gb"))
// console.log(myCreateDate.toLocaleDateString("en-in"))

// let myTime=Date.now()
// console.log(myTime)
// // console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDate())
// console.log(newDate.getDay())

// let ac="KP"
// let dob= "01/12/1995"

// let f = `I am ${ac} and my DOB ${dob}`
// console.log(f)

let dayname = newDate.toLocaleString('default',{
    weekday:"short"

})

console.log(dayname)










