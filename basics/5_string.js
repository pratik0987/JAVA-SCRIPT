const name = "prateek"
const repocount = 30

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo is ${repocount}`);

const gameName = new String('prateek-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,3)
console.log(anotherString);

const newStringOne = "   prateek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:/hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'));

console.log(url.includes('prateek'));


console.log(gameName.split('-'));


