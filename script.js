var elementosInfo = document.querySelectorAll(".info");

elementosInfo.forEach(
  /*executa uma funçãopara cada elemento*/ function (info) {
    info.addEventListener("click", function () {
      info.classList.toggle("ativa");
    });
  }
);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
