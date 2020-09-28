function checkMoney() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let money = { value: 2000, currency: "UAH" };
      Math.random() > 0.25
        ? resolve(money)
        : reject("Ошибка! У Вас не достаточно денег на счету!");
    }, 1000);
  });
  return promise;
}

function findPerson() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = { name: "John", surname: "Pupkin" };
      Math.random() > 0.25
        ? resolve(person)
        : reject("Ошибка! Вас нет в списке приглашенных!");
    }, 1000);
  });
  return promise;
}

function findPlace() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let place = { number: 45, type: "allIn" };
      Math.random() > 0.25
        ? resolve(place)
        : reject("Ошибка! Нет свободных мест!");
    }, 1000);
  });
  return promise;
}

function sendMail() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let date = new Date();
      Math.random() > 0.25
        ? resolve(date)
        : reject(
            "Ошибка! Письмо не может быть отправлено на ваш электронный адрес!"
          );
    }, 1000);
  });
  return promise;
}

checkMoney()
  .then(
    (money) =>
      (document.getElementsByTagName("main")[0].innerHTML +=
        "Денег достаточно! Стоимость: " +
        money.value +
        money.currency +
        "<br/>")
  )
  .then(findPerson)
  .then(
    (invitation) =>
      (document.getElementsByTagName("main")[0].innerHTML +=
        "Вы приглашены! " +
        invitation.name +
        " " +
        invitation.surname +
        "<br/>")
  )
  .then(findPlace)
  .then(
    (place) =>
      (document.getElementsByTagName("main")[0].innerHTML +=
        "Ваше место: " + place.number + " Тип: " + place.type + "<br/>")
  )
  .then(sendMail)
  .then(
    (date) =>
      (document.getElementsByTagName("main")[0].innerHTML +=
        "Проверьте Ваш Email! Письмо отправлено: " +
        date.toDateString() +
        "<br/>")
  )
  .catch(
    (error) =>
      (document.getElementsByTagName("main")[0].innerHTML +=
        "<p class='error'>На конференцию не идем! " + error + "</p><br/>")
  );
