fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => getTable(data))
  .catch((err) => console.error(err));

function getTable(data) {
  var rate = false;
  var tbody = document.getElementsByTagName("tbody")[0];
  data.forEach((element) => {
    
    if (parseFloat(element.rate) >= 25) {
      rate = true;
      tbody.innerHTML +=
      "<tr>" +
      `<td>${element.cc}</td>` +
      `<td>${element.exchangedate}</td>` +
      `<td>${element.rate}</td>` +
      `<td>${element.txt}</td>` +
      "</tr>";
    }
  });
  if (rate === false) {
    tbody.innerHTML = "Ошибка! Таких валют нет.";
  }
}
