// Inheritance being done in prototype

function Person(name) {
    this.name = name
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}

let abhi = new Person("Abhi")
abhi.greet()