
// TODO: Easy 
/**
 * 1. Declare an array named `teaFlavours` that contains the strings `"green tea"`, and `"oolong tea"`.
    Access the first element of the aray and store it in a variiable named `firstTea`.
 */

let teaFlavours = ["green tea", "black tea", "oolong tea"]
//! let teaFla = new Array("green tea", "black tea", "oolong tea")
let firstTea = teaFlavours[0]
// console.log(firstTea);



/**
 * 2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`.
    Access the third element in the array and store it in a variable named `favouriteCity`.
 */
let cities = ["London", "Tokyo", "Paris", "New York"]
let favouriteCity = cities[2]


/**
 * 3. You have an Array named `teaTypes` containing `"herbal Tea"`, `"white Tea"` and  `"Masala Tea"` 
    Change the second element of the array to `"jasmine Tea"`
 */

let teaTypes = ["herbal Tea", "white Tea", "masala Tea"]
teaTypes[1] = "jasmine Tea"


/**
 * 4. Declare an array named `"citiesVisited"` containing `"Mumbai"` and `"Sydney"`
    Add `"Berlin"` to the array using "push" method
 */

let citiesVisited = ["Mumbai", "Sydney"]
// citiesVisited[citiesVisited.length] = "Berlin"
citiesVisited.push("Berlin")


/**
 * 5. You have a Array named `"teaOrders"` with `"Chai"`, `"iced Tea"`, `"matcha"`, and `"earl grey"`
    Remove last element of the Array using `pop` method and store it in a variable named `"lastOrder"`
 */

let teaOrders = ["Chai", "iced Tea", "earl grey"]
let lastOrder = teaOrders.pop()


// TODO: Intermediate
/**
 * 6.  You have an array named `"popularTeas"` containing `"green Tea"`, `"oolong Tea"`, and `"Chai"`
    Create a soft copy of this array named `"softCopyTeas"`
 */


let popularTeas = ["green Tea", "oolong Tea", " Chai"]
let softCopyTeas = popularTeas
popularTeas.pop()
// console.log(popularTeas)
// console.log(softCopyTeas)


/**
 * 7. You have an arrat named `"topCities"` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
    Create a hard copy of this array named `"hardCopyCities"`.
 */

let topCities = ["Berlin", "Singapore", "New York"]
// let hardCopyCities = topCities.slice()
let hardCopyCities = [...topCities]
topCities.pop()
// console.log(topCities)
// console.log(hardCopyCities)


/**
 * 8. You have 2 Arrays: `europeanCities` coontaining `"Paris"` and `"Rome"` and `asianCities` containing `"Tokyo"` and `"Bangkok"`
    Merge these two arrays into a new array named `worldCities`
 */

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities)

/**
 * 9. You  have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, `"earl grey"`
    Find the length of the Array and store it in a variable named `menuLength`
 */

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length
// console.log(menuLength)

/**
 * 10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"cape Town"`, and `"Vancouver"`.
    Check if `"London"` is in array and store the result in a variable named isLondonInList. 
*/

let cityBucketList = ["Kyoto", "london", "cape towm", "Vancouver"]
let isLondonInList = cityBucketList.includes("london")
// console.log(isLondonInList)



