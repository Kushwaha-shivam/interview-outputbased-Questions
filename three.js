// +++++++++++ Question -1 ==> tell the output ++++++++++ 

// console.log(a)  //undefined 
// The console.log(a) prints undefined. This is because a is declared using var, so it's hoisted to the top of its scope, but it's not initialized yet, hence it has the value undefined.

// console.log(b)  //ReferenceError: b is not defined 
// The console.log(b) throws a ReferenceError because b has not been declared or initialized yet, and it's being accessed before its declaration.
var a = b = 5


// ++++++++++++++ Question -2 ++++++++++ 
var x = 5;
console.log(x++)
console.log(x)

// ++++++++++++++ Question -3 ++++++++++ 
console.log(1 < 2 < 3)
console.log(1 > 2 > 3)

// ++++++++++++++ Question -4 ++++++++++ 
// How to freeze a particular property of an object 
let obj = {
    name: "ram",
    salary: 20000,
    id: 50
}

// changing the value of name - before freezing the property 
// obj.name = "shivam"
// console.log(obj.name)

// freezing the only name property of the object 
Object.defineProperty(obj, "name", {
    value: obj.name,
    writable: false
})

// changing the value of name - after freezing the property 
obj.name = "shivam"
console.log(obj.name)