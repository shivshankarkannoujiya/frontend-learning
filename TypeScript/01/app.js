"use strict";
/**
 * Basic Types
 * Primitive Types: (number, string, boolean)
 * Array
 * Tuples
 * Enum
 * Any, Unknown, Void, Null, Undefined, Never
 */
// TODO: number
// let a = 12;
// ERROR: Type 'string' is not assignable to type 'number'.ts(2322)
// a = "abhi"
// TODO: Array
// let arr: (string | number)[]
// let arr = [1, 2, 3, "Abhi"];
// TODO: Tuples
// Similarly array: fixed size with fixed types
// let brr: [string, number] = ["abhi", 12];
// let crr: [number, string] = [12, "abhi"];
// TODO: enum
// enum UserRoles {
//     ADMIN = "admin",
//     GUEST = "guest",
//     SUPER_ADMIN = "super_admin"
// }
// console.log(UserRoles.ADMIN)
// TODO: any
// we can put any types of values in future
// WARNING: Avoid using Any
// let a;
// a = 12
// a = "abhi"
// a.toUpperCase();
// TODO: unknown
// let a: unknown;
// a = 12;
// a = "abhi"
// ERROR: 'a' is of type 'unknown'
// a.toUpperCase()
// We have to Check first then we can implement methods related to that type of value
// if (typeof a === "string") {
//     a.toUpperCase()
// }
// TODO: void
// if function does not return anything
// Then we can use `void`
// function log(): void{
//     console.log(`Does not return anything so we are using "void"`)
// }
// TODO: null
// let a: null;
// a = null
// TODO: undefined
// let a: undefined;
// TODO: never
// function abcd(): never {
//     while (true) { };
// }
// abcd();
// console.log(`if we put never this line will never execute only function will Exec`);
