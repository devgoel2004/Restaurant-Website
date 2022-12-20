document
  .querySelector("#button-navigation")
  .addEventListener("click", function () {
    if (document.querySelector(".image2").style.display === "none") {
      document.querySelector(".image2").style.display = "block";
    } else {
      document.querySelector(".image2").style.display = "none";
    }
  });
var x = document.querySelector("#button-navigation");
x.addEventListener("click", function () {
  if (document.querySelector(".content").style.height === "5800px") {
    document.querySelector(".content").style.height = "5300px";
  } else {
    document.querySelector(".content").style.height = "5800px";
  }
});
