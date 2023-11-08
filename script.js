var rdm1 = Math.random();
rdm1 = (rdm1 * 6) + 1;
rdm1 = Math.floor(rdm1);

var imageRdm1 = "./images/dice" + rdm1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageRdm1);

var rdm2 = Math.random();
rdm2 = (rdm2 * 6) + 1;
rdm2 = Math.floor(rdm2);

var imageRdm2 = "./images/dice" + rdm2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageRdm2);

if (rdm1 > rdm2) {
  document.querySelector("h1").textContent = "Player 1 is winner";


}
else if (rdm1 < rdm2) {
  document.querySelector("h1").textContent = "Player 2 is winner";
}
else if (rdm1 == rdm2) { document.querySelector("h1").textContent = "Draw"; }
