// Reverse a String: Write a function to reverse a string without using built-in reverse() method.

let str = "Hello Shivam"
let reverseString = "";
function reverseStr(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString
}
console.log(reverseStr(str))



// Write a function to find the maximum and minimum elements in an array.
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
let min = arr1[0]
let max = arr1[0]

function findMinAndMax(arr1) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > max) {
            max = arr1[i]
        }

        if (arr1[i] < min) {
            min = arr1[i]
        }
    }
    return { min, max }

}

console.log(findMinAndMax(arr1))


// Write a function to count the number of keys in an object.
let obj = { name: "ram", id: 2, gf: true }

let count = 0;
function keyCount(object) {
    for (const key in obj) {
        // console.log(key)
        count++
    }
    return count
}
console.log(keyCount(obj))



// Write a function to merge two objects.
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};


const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'blue',
    price: 20000,
    features: ['Bluetooth', 'Backup camera', 'Air conditioning']
};

// Now we have two object person and car , we have to merge the obejcts 
let mergerdObj = { ...person, ...car }
// console.log(mergerdObj)

// second way to do it using assign() method 
let mergedObjSecondType = Object.assign({}, person, car)
console.log(mergedObjSecondType)

