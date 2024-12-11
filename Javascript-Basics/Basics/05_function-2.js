/**
    Higher Order function: 
    - Takes another function as a parameter
    - Return a function 
 */

function makeTea(typeOfTea) {
  return `maketeak: ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
// console.log(order);

// Important
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
// console.log(teaMaker); // [Function (anonymous)]
// console.log(teaMaker()); // Making undefined
// console.log(teaMaker("green tea")); // Making green tea

let result = teaMaker("green tea");
console.log(result);

/**
 * TODO: Study More about this concepts
  Higher-Order Function: createTeaMaker returns another function.
  Closure: The returned function retains access to the scope of createTeaMaker.
 */
