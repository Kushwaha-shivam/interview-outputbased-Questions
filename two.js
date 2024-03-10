
// ++++++++++++++  Question -1 ++++++++++++++++++++++++ 
var x = 20

function foo() {
    // console.log(x)  //udnefined 
    var x = 10

}

foo()


// because of hosting the code will behave like this so it's value is undefined ==>

// var x = 20;

// function foo() {
//     var x; // hoisted declaration
//     console.log(x);  // undefined
//     x = 10; // assignment
// }

// foo();




// ++++++++++++++  Question -2 ++++++++++++++++++++++++ 

// console.log(y)  //ReferenceError: Cannot access 'y' before initialization
// let y = 10


// ++++++++++++++  Question -3 ++++++++++++++++++++++++ 

// console.log("Start")
// setTimeout(() => {
//     console.log("Timeout")
// }, 1000);
// console.log("End")
// output ==>    Start > End > Timeout


// console.log("Start")
// setTimeout(() => {
//     console.log("Timeout")
// }, 0);
// console.log("End")

// output ==>    Start > End > Timeout


/* "Start" is logged to the console.
setTimeout is called, but the function passed to it is not executed immediately. Instead, it's scheduled to be executed after the current synchronous code block finishes executing.
"End" is logged to the console.
Now that the synchronous code block has finished executing, the event loop checks for any asynchronous tasks that need to be executed. Since there's a task scheduled by setTimeout, it executes the function passed to it, logging "Timeout" to the console.
*/


// ++++++++++++++  Question -4 ++++++++++++++++++++++++ 

// setTimeout(() => {
//     console.log("Timeout")
// }, 0);
// Promise.resolve().then(() => console.log("Promise"))
// console.log("End")

// output : End > Promise > Timout

// Kaise ho rha hai ye de kho ? ==> 
/*
console.log("End"): This line is straightforward. It logs "End" to the console immediately because it's not wrapped in any asynchronous operation.

Promise.resolve().then(() => console.log("Promise")): Here, a Promise is created using Promise.resolve(). This promise resolves immediately. After the promise resolves, it executes the function passed to then(). However, since this promise resolution is a microtask, it gets executed before the next macro task (which is the setTimeout).

setTimeout(() => console.log("Timeout"), 0): This line schedules a task to be executed after a minimum of the specified time, which is 0 milliseconds in this case. But even though it's scheduled with a delay of 0 milliseconds, it's treated as a macro task. This means it's put at the end of the event loop queue and gets executed after the current synchronous code block completes.
*/


// ++++++++++++++  Question -5 ++++++++++++++++++++++++ 

async function foo() {
    return "Hello World"
}

// const result = foo()
// console.log(result) // output: Promise { 'Hello World' }

// -- agar mujhe value print karni hai to 
// foo().then((response) => console.log(response))


// ++++++++++++++  Question -6 ++++++++++++++++++++++++ 
// console.log([1, 2] == [3, 5])   //false 
// console.log([1, 2] == [1, 2])   //false 

/*
console.log([1, 2] == [3, 5]): Here, you're comparing two different arrays ([1, 2] and [3, 5]). Even though their contents are different, they are distinct objects in memory. Therefore, the result of this comparison will be false.

console.log([1, 2] == [1, 2]): In this case, you're comparing two arrays ([1, 2] and [1, 2]). Again, they are distinct objects in memory, despite having the same contents. Therefore, the result of this comparison will also be false.
*/

// same condition goes with objects 
let obj1 = { name: "shivam", age: 20 }
let obj2 = { name: "shivam", age: 20 }
console.log(obj1 == obj2)