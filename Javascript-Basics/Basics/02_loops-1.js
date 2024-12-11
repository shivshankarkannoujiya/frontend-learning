/**
 *1. Write a `while` loop that calculate the sum of all numbers from 1 to 5 and stores the result in a varibale named `sum`
 */

let sum = 0
let i = 1

while (i <= 5) {
    sum += i
    i++
}
// console.log(sum)



/**
 * 2. Write a `while` loop that count down from 5 to 1 and stores the numbers in an array named `countdown`
 */

let countdown = []
let j = 5

while (j > 0) {
    countdown.push(j)
    j--
}
// console.log(countdown)


/**
 *3. Write a `do while` loop that prompts a user to enter their favourite tea type until they enter `stop`.
    Store each tea type in an array named `teaCollection`.
 */

let teaCollection = []
let tea

// do {
//     tea = prompt(`Enter your favourite tea (type "stop" to finish)`)

//     if (tea !== "stop") {
//         teaCollection.push(tea)
//     }
// } while (tea !== "stop");


/**
 * 4. Write a `do while` loop that add numbers from 1 to 3 and stores the results in a variable named `total`
 */

let total = 0
let k = 1

do {
    total += k
    k++
} while (k <= 3);


/**
 * 5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array named  `multipliedNumbers`
 */

let multipliedNumbers = []
let originalNumbers = [2, 4, 6]

for (let i = 0; i < originalNumbers.length; i++) {
    multipliedNumbers.push(originalNumbers[i] * 2)
}
// console.log(multipliedNumbers);



/**
 * 6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each cities in a new array named `citiesList`
 */

let citiesList = []
let cities = ["Paris", "New York", "Tokyo", "London"]

for (let i = 0; i < cities.length; i++){
    citiesList.push(cities[i])
}
// console.log(citiesList);
