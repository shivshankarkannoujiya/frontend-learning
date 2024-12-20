// TODO: *Generics
/**
 * Generics are language independent concept (exist in C++ as well)
 */

// TODO: Problem Statement 1
/**
 * Let's say you have a function that needs to return the first element of an array. Array can be of type either `string` or `integer`
 */

type input = string | number;
function firstElement(arr: input[]): input {
  return arr[0];
}

// const value = firstElement(["abhi", "kumar"])
// console.log(value.toUpperCase());

/**ERROR:
 Property 'toUpperCase' does not exist on type 'input'.
 Property 'toUpperCase' does not exist on type 'number'
 */

//  it should  be either `number` or `string` array but, it is not complaining
// const value = firstElement([1,2,3,"abhi", "kumar"])

// can also do to solve:
function FirstEl(arr: string[] | number[]) {
    return arr[0];
}

// Now it will complain
// const value = FirstEl([1,2,3,"abhi", "kumar"])




//TODO: To fix this: Use `Generic`
function identity<T>(args: T): T {
    return args;
}

const output1 = identity<string>("abhi");
const output2 = identity<number>(100);

// Now we can do
// output1.toUpperCase()


// TODO: Original Problem
// Solution

function getFirstEl<T>(arr: T[]): T{
    return arr[0]
}

const firstEl = getFirstEl<string>(["Abhi", "Kumar"]);
const firstEl1 = getFirstEl<number>([1, 2, 3, 4, 5]);
const firstEl2 = getFirstEl<boolean>([true, false]); 
console.log(firstEl.toUpperCase());
