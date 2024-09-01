
var p1 = Math.random()
p1 = p1 * 6 
p1 = Math.floor(p1) + 1 
var p2 = Math.random()
p2 = p2 * 6 
p2 = Math.floor(p2) + 1

var image_1 = "images/dice"+p1+".png"
var image_2 = "images/dice"+p2+".png"
document.querySelector(".img1").setAttribute( "src",image_1)
document.querySelector(".img2").setAttribute( "src", image_2)
if (p1 === p2) {
  document.querySelector("h1").textContent = "Draw"
}
else if (p1 > p2) {
  document.querySelector("h1").textContent = "👍Player One Wins"
}
else {
  document.querySelector("h1").textContent = "Player Two Wins👍"
}
