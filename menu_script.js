div1 = document.querySelector(".word1");
div2 = document.querySelector(".word2");
div3 = document.querySelector(".word3");
div4 = document.querySelector(".word4");
div1.style.display = "block";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
document.querySelector("#button1").addEventListener("click", () => {
  if (div1.style.display === "none") {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
  }
});
document.querySelector("#button2").addEventListener("click", function () {
  if (div2.style.display === "none") {
    div2.style.display = "block";
    div1.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
  }
});
document.querySelector("#button3").addEventListener("click", function () {
  div3.style.display = "block";
  div1.style.display = "none";
  div2.style.display = "none";
  div4.style.display = "none";
});
document.querySelector("#button4").addEventListener("click", function () {
  div4.style.display = "block";
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
});
