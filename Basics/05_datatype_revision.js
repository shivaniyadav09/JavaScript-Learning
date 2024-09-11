//# Primitive datatype Use by the call by value means copy should be provided not actual data address

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//dynamically typed language

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

//Reference(non primitive)

//Array , Object, Function

const heros = ["shaktiman", "naagraj", "doga"];  //arry
let myObj ={                                     //object
    name: "shivani",
    age: 21
}
const myFunction = function(){
    console.log("Hello");
}

console.log(typeof BigNumber)
//null by default datatype object
//mostly non premitive type datatype is the object and function object