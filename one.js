// ++++++++++++++++++++  Question -1 +++++++++++++++++++++++++ 
// We have a string and interviwer said that -> string ka har ek word ka pahla alphabet capital kar do 

const str = "hi i am shivam"
// sabse pahli baat ki javascript me capitalize() method nahi hota hai ye python me hota hai 


// case 1: Agar hame poori string ka sirf pahla alphabet capital karna hai to ye karege ==> 

const capitalizedFirstAlphabetOfString = str.charAt(0).toUpperCase();
// console.log(capitalizedFirstAlphabetOfString)

// ab hamare pas string ka pahle alphabet uppercase me aa gya ab ham baaki ki string ko slice krke add kr dege 
const newString = capitalizedFirstAlphabetOfString + str.slice(1,)
// console.log(newString)



// case 2: Agar hame string ke har ek word ke pahle alphabet ko capital krna hai to kya to ham ye use krege ==> 
let myCompliment = "shivam kushwaha is a good boy"

// step -1 : ham is string ko splite karege to hame array ke andar ek ek word as a element mil jaiga 
let words = myCompliment.split(" ")
console.log(words)  // [ 'shivam', 'kushwaha', 'is', 'a', 'good', 'boy' ]

// step -2 : ab ham is array ke har ek word ko loop lagake iske first alphabet ko uppercase me karege aur baaki ki string ko slice krke isi me add kar dege 
// to hame ek array milega jisme har ek word ka first letter upperacase me hoga 

let CapitalizeWords = words.map((item) => item.charAt(0).toUpperCase() + item.slice(1,))
console.log(CapitalizeWords)    //[ 'Shivam', 'Kushwaha', 'Is', 'A', 'Good', 'Boy' ]

// step -3 : ab ham array ke har ek word ko join() method ki madad se combine kara lege aur ye hame ek string dega 
let eachWordCapitalizedString = CapitalizeWords.join(" ")
console.log(eachWordCapitalizedString)  //Shivam Kushwaha Is A Good Boy


// ++++++++++++++++++++  Question -2 +++++++++++++++++++++++++ 
const user1 = {
    name: "shivam",
    age: 20,
    address: {
        city: "shahjahanpur",
        state: "UP"
    }
}

const user2 = user1

user2.name = "Vimal"
user2.address.city = "Hardoi"
console.log(user1.name)
console.log(user1.address.city)


// ++++++++++++++++++++  Question -3 +++++++++++++++++++++++++ 
const arr = [0, 1, 2, 3, 4, 5]
// apply the filter method && chaining of method
let returnedArr = arr.filter((num) => num < 3).map((num) => num + 5)
console.log(returnedArr)

