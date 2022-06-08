var img1 = document.getElementsByClassName('img1');
var img2 = document.getElementsByClassName('img2');
var header = document.getElementById("header");
var num1 = 0;
var num2 = 0;

for (var i = 0; i < img1.length; i++) {
  var num = Math.floor(Math.random() * 6 + 1);
  img1[i].src = 'images/dice' + num + '.png';
  img1[i].alt = img1[i].src;
  num1 = num;
}

for (var i = 0; i < img2.length; i++) {
    var num = Math.floor(Math.random() * 6 + 1);
    img2[i].src = 'images/dice' + num + '.png';
    img2[i].alt = img2[i].src;
    num2 = num;
  }


if (num1 < num2) {
    header.innerHTML = "Player 2 Wins!"
}

if (num2 < num1) {
    header.innerHTML = "Player 1 Wins!"
}

if (num2 === num1) {
    header.innerHTML = "Draw!"
}