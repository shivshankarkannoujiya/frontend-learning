// TODO: Enumerator
// Allow to define `named constant`
/**
 * The concept behind enumeration is to create a human-redable way to represent a set of `constant value`, which minght otherwise be represented as `number` or `string`
 */

//TODO: Example 1: Game
/**
 * let's say you have a game where you have to perform an action based on whether the user has pressed the arrow keys `up`, `dowm`, `left`, `right`
 */

// enum Directions {
//     Up, // 0
//     Down, // 1
//     Right, // 2
//     Left  // 3
// }

// TODO: Explicitly giving value
// enum Directions {
//     Up = "Up",
//     Down = "Down",
//     Right = "Right",
//     Left = "Left",
// }

// TODO: if we want to start from number: x
enum Directions {
  Up = 1,
  Down,  //2
  Right, //3
  Left, //4
}

function doSomething(keyPressed: Directions) {
  if (keyPressed === Directions.Up) {
    
  }
}

doSomething(Directions.Up);
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Right);
console.log(Directions.Left);


// TODO: Common UseCases in express
// Can define standard StatusCode
// import express from "express";
// const app = express();

enum statusCode {
  Success = 200,
  NotFound = 404,
  Error = 500
}

/*
app.get('/', (req, res) => {
  return res
    .status(statusCode.Success)
})

app.get('/', (req, res) => {
  return res
    .status(statusCode.Error)
})


// We are using same stauscode many places if we need to change 
// Then we can simply change from the defined enum 
app.get('/', (req, res) => {
  return res
    .status(statusCode.NotFound)
})

app.get('/abc', (req, res) => {
  return res
    .status(statusCode.NotFound)
})

*/


