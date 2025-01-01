interface User {
  name: string;
  salary: number;
}

const sumOfSalary = (user1: User, user2: User): number => {
  return user1.salary + user2.salary;
};

const totalSalary = sumOfSalary(
  {
    name: "John",
    salary: 2000,
  },
  {
    name: "Rock",
    salary: 3000,
  }
);

// console.log(`Tatal Salary: ${totalSalary}`);

//TODO: Pick
/**
    Pick, allows you to create a new type by selecting a set of properties (keys) from an existing type(Type)
 */

/* TODO:  
    IMAGINE, you have a user model with several properties, but for a user profile display, you only need a subset of these properties   
*/

interface Person {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}
