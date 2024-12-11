//! Intermediate 
/**
 * 1. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]` and stop when the number is `4` found.
    Store the numbers before `4` in an array named `smallNumbers`
 */

let numbers = [1, 2, 3, 4, 5]
let smallNumbers = []

for (const num of numbers) {
    if (num === 4) {
        break
    }
    smallNumbers.push(num)
}
// console.log(smallNumbers);


/**
 * Use a `for-of` loop to iterate through the array  `["chai", "green tea", "herbal tea", "black tea"]` and skip `herbal tea`
    Store the others tea in an array named `preferredTeas`
 */

let teas = ["chai", "green tea", "herbal tea", "black tea"]
let preferredTeas = []

for (const tea of teas) {
    if (tea === "herbal tea") {
        continue
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);


//!Advance
/**
 * 3. Use a `for-in` loop to loop through an Object containing city populations.
    Stop the loop when population of `Berlin` is found and store all previous cities population in a new object named `cityPopulations`

    let citiesPopulations = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
 */

let citiesPopulations = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
// console.log(Object.keys(citiesPopulations));
// console.log(Object.values(citiesPopulations));

let cityNewPopulation = {}

for (const city in citiesPopulations) {
    if (city === "Berlin") {
        break
    }
    cityNewPopulation[city] = citiesPopulations[city]
}
// console.log(cityNewPopulation);


/**
 * 4. Write a  `for-in` loop to loo through an Object containing city populations.
    Skip any city with a population below 3 million and store rest in a new object named `largeCities`.

    let worldCities = {
        "Sydney": 5000000,
        "Tokyo": 9000000,
        "Berlin": 3500000,
        "Paris": 2200000
    }
 */

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}

let largeCities = {}

for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue
    }

    largeCities[city] = worldCities[city]
}


//!Important

/**
 * 5. Write a `forEach` loop that iterate through an array `["earl grey", "green tea", "chai", "oolong tea"]` 
    Stop the loop when "chai" is found, and store all previous tea types in an array named `availableTeas`. 
 */

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaCollection.forEach((tea) => {
    if (tea === "chai" || tea === "Chai") {
        return
    }
    availableTeas.push(tea)
})
// console.log(availableTeas);


/**
 * 6. Write a `forEach` loop that iterate through an array `["Berlin", "Tokyo", "Sydney", "Paris"]`
    Skip "Sydney" and store the other cities in a new array named `visitedCities`
 */

let myWorldcities = ["Berlin", "Tokyo", "Sydney", "Paris"]
let visitedCities = []

myWorldcities.forEach((city) => {
    if (city === "Sydney") {
        return
    }

    visitedCities.push(city)
})
// console.log(visitedCities);


/**
 * 7. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "herbal tea"]`
    and stop when the length of the the current tea name is greater that 10.
    Store the teas iterated over in an array named `shortTeas`
 */

let myteaCollection = ["chai", "green tea", "black tea", "herbal tea"]
let shortTeas = []

for (const tea of myteaCollection) {
    if (tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}

console.log(shortTeas);
