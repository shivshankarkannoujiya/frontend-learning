const person = {
  name: "Abhihsk",
  greet() {
    console.log(`Hey I am ${this.name}`);
  },
};

person.greet(); // Hey I am Abhihsk, here it has the context

//! if we transfer `refrence` to another valiable
// in that case, Context is lost
const greetFunction = person.greet;
greetFunction(); // Hey I am undefined

/**
  - if we want to get that context
  - we have to `bind` the context
 */

const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); // Hey I am John

/*
TODO: Study about
  - bind
  - call 
  - apply
*/
