class TestClient {
  async getUser(handle) {
    const response = await fetchUserJson(handle);
    return await response.json();
  }
  async getUserPosts(id) {
    const response = await fetchCommentsJson(id);
    return await response.json();
  }
}

function fetchUserJson(handle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Download problem"));
    }, 3000);
    setTimeout(() => {
      resolve(fetch(`https://jsonplaceholder.typicode.com/users?id=${handle}`));
    }, 500);
  });
}

function fetchCommentsJson(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Download comments problem"));
    }, 3000);
    setTimeout(() => {
      resolve(fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`));
    }, 500);
  });
}

(async () => {
  try {
    const client = new TestClient();
    const user = await client.getUser("2").then((user) => {
      console.log(`User name: ${user[0].name}`);
      (async () => {
        await client.getUserPosts(user[0].id).then((posts) => {
          for (const num in posts) {
            if (posts.hasOwnProperty(num)) {
              const post = posts[num];
              console.log(`Post: ${post.title}`);
              document.querySelector(
                "ul"
              ).innerHTML += `<li>${post.title}</li>`;
            }
          }
        });
      })();
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
})();
