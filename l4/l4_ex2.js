window.addEventListener(
  "load",
  () => document.querySelector("button").addEventListener("click", init, false),
  false
);

let users = new Map();

function init(evt) {
  console.log("Init start");

  users.set(document.querySelector("form")[2].value, getUser());
  clearForm();
  console.log(users);

  evt.preventDefault();
}

function getUser() {
  let form = document.querySelector("form");

  let user = {
    name: form[0].value,
    surname: form[1].value,
    email: form[2].value,
    birthDate: form[3].value,
    spec: form[4].value,
  };

  return user;
}

function clearForm() {
  let form = document.querySelector("form");
  for (let i = 0; i < form.length; i++) {
    const element = form[i];
    element.value = "";
  }
}

window.addEventListener(
  "load",
  () =>
    document.querySelector("#search").addEventListener("click", search, false),
  false
);

function search(evt) {
  console.log("search start");
  let user = users.get(document.querySelector("#inputEmail2").value);
  console.log("user found");

  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      const element = user[key];
      document.querySelector("#output").innerHTML += `<td> ${element} </td>`;
    }
  }

  evt.preventDefault();
}
