// Question - 1 =>  Check for Prime Number: Write a function that takes a number as input and returns true if the number is prime, and false otherwise.

let num = 5;
function checkPrimeNumber(num) {
    // Check if the number is less than 2. Since 0 and 1 are not considered prime numbers, any number less than 2 is not prime.

    if (num < 2) {
        console.log("Number is not prime");
    }

    //we'll check that is the number divisible by any number from 2 to the square root of the number 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            // If the number is divisible by any other number, it's not prime
            console.log("The number is  not a  prime number")
        }
        else {
            console.log("The number is prime")
        }
    }

}

checkPrimeNumber(num)