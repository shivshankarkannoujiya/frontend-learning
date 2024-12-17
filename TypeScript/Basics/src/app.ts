// const x: number = 1;
// console.log(x);

// TODO: Write a function that greet s user given their firstname
// Argument: firstname

// function greet(firstname: string): void {
//     console.log(`Hello, ${firstname}`)
// }

// greet("Abhi");

// TODO: Write a function that calculate 2 numbers
// const sum = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(sum(12, 13))

// TODO: Return true/false based on if an user is 18+

// function isLegal(age: number):boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let x = isLegal(18);

// TODO: Create a function that takes another function as input and runs after 1 sec
// function runafterOnesec(fn: ()=> void) {
//     setTimeout(() => {
//         fn()
//     }, 1000);
// }

// runafterOnesec(function () {
//   console.log(`Hii, there`);
// })

const greet = (name: string) => `Hello, ${name}`;
