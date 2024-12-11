function sayHello() {
  console.log(`I would like to say Hello`);
}

// time fn
setTimeout(() => {
  sayHello();
}, 4000);

console.log(`Haha`);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
