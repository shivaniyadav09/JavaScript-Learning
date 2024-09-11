//Stack (primitive) [get a copy of the variable]
//Heap(Non-Primitive)[get reference or the original value mai change]

let javascriptcode = "stackandheap"

let anothername = javascriptcode

anothername = "memory"

console.log(anothername);    //different output
console.log(javascriptcode); //different output

//++++++++++++++++++++++++++++++++++++++++++(Heap Concept)
let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let user = userOne

user.email = "user@pc.com"

console.log(userOne.email); //same output
console.log(user.email); //same output


