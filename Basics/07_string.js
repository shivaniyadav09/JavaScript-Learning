const name = "shivani"
const repoCount = 50

//console.log(name+repoCount+" vaue"); older version to write the syntax 

console.log(`I am ${name},repo count is ${repoCount}`); //new version to write the code , this is called string interpolision

//another way to declearing the string

const tempName = new /*here new is the object*/ String('shivani')

//console.log(tempName[3]);  //acess value with the key
//console.log(tempName.__proto__); //access prototype of the string

// console.log(tempName.length);
// console.log(tempName.toUpperCase()); //method or function access direct through . operator
console.log(tempName.charAt(5)); //method or function access direct through . operator
console.log(tempName.indexOf('h')); //method or function access direct through . operator

const newString = tempName.substring(0,4) //not take negative value start from 0
console.log(newString);

const anotherstring = tempName.slice(-5,4) //negative value from reverse output [in]
console.log(anotherstring);

const newStringOne = "   shivani   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shivani.com/$34yadav"
console.log(url.replace('$34','-'));

console.log(url.includes('komal'));
console.log(tempName.split('-'));
