function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "John", url: "http://john.com" });
    }, 3000);
  });
}

// Consume
/*
fetchUserData()
  .then((data) => console.log("User data: ", data))
  .catch((err) => console.log("Error fetching data", err));
*/

// Another way of consuming
async function getUserData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchUserData();
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
