// TODO: interface
// Uses for assigning `types` to object
// Both, let you `aggregate` data together

interface User {
    firstname: string,
    lastname: string,
    age: number,
    email?: string
}


function isLegal(user: User): boolean {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

const ans = isLegal({
    firstname: "Abhi",
    lastname: "Kumar",
    age: 19
})

// console.log(ans);


// TODO: interface have another special property
// We can `implements` interface as class

interface Person {
    name: string,
    age: number,
    greet(phrase: string): void
}

class Employee implements Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }

}

/**
 * TODO: Study
 * Diff interface vs type
 * interface: can be implemented as classes 
 * type: Can not be implemented as classes
 */

// TODO: type
// let you `aggregate` data together

type User2 = {
    name: string,
    age: number,
    gender?: string
}


// But, they let you do `few` extra things
// 1.
// TODO: 