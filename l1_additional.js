window.addEventListener("load", function () {
  let lies = document.getElementsByTagName("li");
  for (let i = 0; i < lies.length; i++) {
    const li = lies[i];
    let menuDisplayed = false;
    let menuBox = document.querySelector("#information");
    let p = menuBox.children[0].innerText;

    li.addEventListener("contextmenu", (e) => {
      let left = e.clientX;
      let top = e.clientY;

      menuBox.children[0].innerText = p + " " + (i + 1);

      menuBox.style.left = left + "px";
      menuBox.style.top = top + "px";
      menuBox.style.display = "block";

      e.preventDefault();

      menuDisplayed = true;
    });

    window.addEventListener("click", (e) => {
      let inf = document.getElementById("information");
      if (
        menuDisplayed == true &&
        e.target != inf &&
        e.target != inf.children[0] &&
        e.target != inf.children[1]
      ) {
        menuBox.style.display = "none";
      }
    });
  }
});
