// Promise creaion
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("data fetched successfylly");
      } else {
        reject("Error while fetching data");
      }
    }, 3000);
  });
}

// consume promise
// let response = fetchData()
// console.log(response);

fetchData()
  .then((data) => {
    console.log(data);
    // return `Chaining`;
    return data.toLowerCase(); // also can perform operation with data and return
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
