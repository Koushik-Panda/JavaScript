// dates

// let myDate=new Date()
// // console.log(myDate.toString());  
// // console.log(myDate.toDateString())
// // console.log(myDate.toTimeString())
// console.log(myDate.toLocaleDateString())
// // console.log(myDate.toISOString())
// // console.log(myDate.toLocaleDateString())
// // console.log(typeof myDate) // Object

// let myCreateDate = new Date("01,23,2024")
// console.log(myCreateDate.toLocaleDateString("en-gb"))

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // convvert ins econds

// let newDate = new Date()
// console.log(newDate)
// // console.log(newDate)
// // console.log(newDate.getMonth()+1) // +1 Because it start from 0
// let nowDate = newDate.getDate()
// console.log(nowDate)

let newDate = new Date()

// let nowDate = newDate.getDate()
// console.log(nowDate)

// let nowMonth = newDate.getMonth()
// console.log(nowMonth)

// let nowYear = newDate.getFullYear()
// console.log(nowYear)

// let m = "Koushiik Panda"
// let DOB = "01/1/2/1995"

// let f=`Hello, My name is ${m} and my date of birth${DOB}.`
// console.log(f)

// let newDate = "crime"
let dayname = newDate.toLocaleString('default',{
    weekday:"long",
    
})

console.log(dayname)
