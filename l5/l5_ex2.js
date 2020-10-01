class TestClient {
  async getUser(handle) {
    const response = await fetchUserJson(handle);
    return await response.json();
  }
}

function fetchUserJson(handle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Download problem"));
    }, 3000);
    setTimeout(() => {
      resolve(
        fetch(`https://jsonplaceholder.typicode.com/users?id=${handle}`)
      );
    }, 500);
  });
}

(async () => {
  try {
    const client = new TestClient();
    const user = await client.getUser("2").then((user) => {
      console.log(`User name: ${user[0].name}`);
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();
