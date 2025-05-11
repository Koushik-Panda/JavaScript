// const marvel=["thor","hulk","groot"]
// const dc = ["sup", "bat", "ww"]

// marvel.push(dc)
// console.log(marvel[3][1]);

// const a=marvel.concat(dc)
// console.log(a)

// const b = [...marvel, ...dc]  // - spread operator
// console.log(b)


// const crime = marvel + dc
// console.log(crime)

// const box = [1,2,3, [4,5,6],7,[6,7,[8,7,[6,4,5]]]]
// // const moxa = box.flat(1)
// // const moxa = box.flat(2) 
// const moxa = box.flat(Infinity) // all aray coame to  a single array and flat(1) means 1 level deep, 
// console.log(moxa)

console.log(Array.isArray("Hitesh"))
console.log(Array.isArray["Hitsesh"])
console.log(Array.from["Hitsesh"])
console.log(Array.from({name:"Hitesh"})) // interesting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2, score3))

// .isArray - Checks whether a given value is an array.
//.from - Converts array-like or iterable objects into a real array.
//.of - Creates a new array from a list of values. Use it when you want to ensure you’re creating an array with actual values, not empty slots.