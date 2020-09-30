window.addEventListener(
  "load",
  () => document.querySelector("button").addEventListener("click", init, false),
  false
);
let users = new Set();
function init(evt) {
  console.log("Init start");

  let form = document.querySelector("form")
  users.add({
    name: form[0].value,
    surname: form[1].value,
    birthDate: form[2].value,
    spec: form[3].value,
  });

  console.log(users);

  evt.preventDefault();
}

function getUser() {
  let form = document.querySelector("form");

  let user = {
    name: form[0].value,
    surname: form[1].value,
    birthDate: form[2].value,
    spec: form[3].value,
  };

  return user;
}
