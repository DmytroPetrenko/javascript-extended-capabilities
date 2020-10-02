window.addEventListener(
  "load",
  () => {
    document.querySelector("button").addEventListener("click", (e) => {
      (async () => {
        try {
          const client = new Client();
          await client
            .getInfo(document.querySelector("#search").value)
            .then((info) => {
              info.forEach((element) => {
                document.querySelector("ul").innerHTML += `<li>${Object.values(
                  element
                )}</li>`;
              });
            });
        } catch (error) {
          document.querySelector("ul").innerHTML = error;
        } finally {
          document.querySelector("ul").innerHTML +=
            "I worked with ‘https://jsonplaceholder.typicode.com/’";
        }
      })();
      e.preventDefault();
    });
  },
  false
);

class Client {
  async getInfo(typeInfo) {
    const arr = new Array("posts", "comments", "todos");
    let flag = false;
    arr.forEach((element) => {
      if (typeInfo == element) {
        flag = true;
      }
    });
    if (flag == true) {
      const response = await fetchJson(typeInfo);
      flag = false;
      return await response.json();
    } else {
      new Error("Bad parametr. Type a new one");
    }
  }
}

function fetchJson(typeInfo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Download problem"));
    }, 3000);
    setTimeout(() => {
      resolve(fetch(`https://jsonplaceholder.typicode.com/${typeInfo}`));
    }, 500);
  });
}
