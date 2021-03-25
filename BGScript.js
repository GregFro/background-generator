var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var button = document.getElementById("random");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

console.log(css);

function setGradient(){
    body.style.background = "linear-gradient(to right,"+ color1.value + ","+ color2.value+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
    body.style.background = "linear-gradient(to right,"+ "blue" + ","+ color2.value+ ")";

})
