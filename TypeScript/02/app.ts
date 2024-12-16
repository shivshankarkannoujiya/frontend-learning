/**
 * Type Inference
 * Type annotation
 */

// TODO: Type Inference
// We do not specify the Types `TS` understand by itself
// let a = 12; // let a: number

// TODO: Type annotation
// We provide Specify the Types
// let a: number = 12;
// function log(a: number, b: string): void{}

/**
 * Interfaces and Type Aliases
 * Defining Interfaces
 * Using interfaces to define Object shape
 * Extending Interfaces
 * Types aliases
 * Intersection Types
 */

// interface User {
//   name: string;
//   email: string;
//   password: string;
//   gender?: string; // optional
// }

// function getUserData(obj: User): void {}

// calling fn : We have to provide the object on the basis of User interface
// getUserData({
//   name: "abhi",
//   email: "abhi@google.com",
//   password: "123abc",
// });

// TODO: Extending Interfaces

// interface User{
//   name: string,
//   email: string,
//   passowrd: string,
//   gender?: string
// }

// Inherit all property of User
// It will also have its own properties
// TODO: extends
// interface Admin extends User{
//   admin: boolean
// }

// function getAdminData(obj: Admin): void { };

// TODO: if 2 interface have `same` name
// Both will merged: Single interface banega

// interface abc{
//   name: string
// }

// interface abc{
//   email: string
// }

// function getABC(obj: abc): void {
//   obj.email
//   obj.name // Dono ka access milega
// }

// TODO: Type Aliases
// type CustomType = number;
// let a: CustomType;

// type customTypes = number | boolean | string
// let b: customTypes

// TODO: Union
// let a: string | number;

// TODO: intersection

// type User = {
//   name: string,
//   email: string
// }

// type Admin = User & {
//     getDetails(user: string): void
// }

// function getData(a: Admin) {
//   a.name
//   a.email
//   a.getDetails
// }


