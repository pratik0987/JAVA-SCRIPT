// Primitive

// 7 types : string,number,boolean,null,undefined,symbol, BigInt.

const score = 100
const scoreValue = 100.30

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 7345629347383928n


// Reference (non-primitive)

// array, objects, functions

const heros = ["shaktiman","naagraj","doga"]
let myObj={
    name : "prateek",
    age : 26,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof outsideTemp);


// ************************************************

// stack(primitive) ,Heap(non-primitive)

let myYoutubename = "prateekmahawar"

let anothername = myYoutubename
anothername = "chai or code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "prateekmahawar.com"

console.log(userOne.email);
console.log(userTwo.email);






