let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let a = ["", "", "", "", "", "", "", "", ""];
let ximg = '<i class="fa-regular fa-x"></i>';
let oimg = '<i class="fa-regular fa-o"></i>';
let box = document.getElementsByClassName("box");
let popBox = document.getElementsByClassName("popBox");
let popup = document.getElementsByClassName("popup");
var audio = new Audio("click-sound.wav");
var audio2 = new Audio("click-sound2.wav");
var win = new Audio("winning.wav");
var lose = new Audio("lose.wav");
var draw = new Audio("draw.wav");
function play(n) {
  if (a[n] != "") {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    box[n].innerHTML = ximg;
    a[n] = "x";
    check();
    removeThis(n);
    if (array.length != 0) {
      const myTimeout = setTimeout(randomPlay, 300);
    }
  }
  check();
  console.log(array)
  console.log(a)

}
function randomPlay() {
  audio2.currentTime = 0;
  audio2.play();
  if (checkDouble()===false) {
    console.log(checkDouble())
    var r = Math.floor(Math.random() * array.length);
    box[array[r]].innerHTML = oimg;
    a[array[r]] = "o";
    check();
    removeThis(array[r]);
  } else {
    console.log(checkDouble())
    box[checkDouble()].innerHTML = oimg;
    a[checkDouble()] = "o";
    check();
    removeThis(array[checkDouble()]);
  }
}
function removeThis(n) {
  index = array.indexOf(n);
  if (index > -1) {
    array.splice(index, 1);
  }
}
function check() {
  if (
    equalo(a[0], a[1], a[2]) ||
    equalo(a[0], a[3], a[6]) ||
    equalo(a[1], a[4], a[7]) ||
    equalo(a[2], a[5], a[8]) ||
    equalo(a[3], a[4], a[5]) ||
    equalo(a[6], a[7], a[8]) ||
    equalo(a[0], a[4], a[8]) ||
    equalo(a[2], a[4], a[6])
  ) {
    lose.play();
    popup[0].style.width = "100%";
    popup[0].style.left = "0%";
    popBox[0].innerHTML =
      "<h1 style='filter:drop-shadow(0px 0px 5px red)'> You Lose </h1><button onclick='history.go(0);' style='background-color:#af0b0b;'> Play Again</button>";
  } else if (
    equalx(a[0], a[1], a[2]) ||
    equalx(a[0], a[3], a[6]) ||
    equalx(a[1], a[4], a[7]) ||
    equalx(a[2], a[5], a[8]) ||
    equalx(a[3], a[4], a[5]) ||
    equalx(a[6], a[7], a[8]) ||
    equalx(a[0], a[4], a[8]) ||
    equalx(a[2], a[4], a[6])
  ) {
    win.play();
    popup[0].style.width = "100%";
    popup[0].style.left = "0%";
    array = [];
    popBox[0].innerHTML =
      "<h1 style='filter:drop-shadow(0px 0px 5px green)'> You Win </h1><button onclick='history.go(0);' style='background-color:#14a551;'> Play Again</button>";
  } else if (array.length == 1) {
    draw.play();
    popup[0].style.width = "100%";
    popup[0].style.left = "0%";
    popBox[0].innerHTML =
      "<h1 style='filter:drop-shadow(0px 0px 5px blue)'> Tied </h1><button onclick='history.go(0);' style='background-color:#0547bb;'> Play Again</button>";
  }
}
function equalx(n1, n2, n3) {
  if (n1 == "x" && n2 == "x" && n3 == "x") {
    return true;
  }
}
function equalo(n1, n2, n3) {
  if (n1 == "o" && n2 == "o" && n3 == "o") {
    return true;
  }
}
function checkDouble() {
  let n1 = 0,  n2 = 4, n3 = 8;
  for (i = 0; i < 2; i++) {
    if (a[n1] == "o" && a[n2] == "o" && a[n3] == "") return n3;
    else if (a[n1] == "o" && a[n2] == "" && a[n3] == "o") return n2;
    else if (a[n1] == "" && a[n2] == "o" && a[n3] == "o") return n1;
    else if (a[n1] == "x" && a[n2] == "x" && a[n3] == "") return n3;
    else if (a[n1] == "x" && a[n2] == "" && a[n3] == "x") return n2;
    else if (a[n1] == "" && a[n2] == "x" && a[n3] == "x") return n1;
    else {
      n1 = 2;
      n2 = 4;
      n3 = 6;
    }
  }
  n1 = 0; n2 = 1; n3 = 2;
  for (i = 0; i < 3; i++) {
    if (a[n1] == "o" && a[n2] == "o" && a[n3] == "") return n3;
    else if (a[n1] == "o" && a[n2] == "" && a[n3] == "o") return n2;
    else if (a[n1] == "" && a[n2] == "o" && a[n3] == "o") return n1;
    else if (a[n1] == "x" && a[n2] == "x" && a[n3] == "") return n3;
    else if (a[n1] == "x" && a[n2] == "" && a[n3] == "x") return n2;
    else if (a[n1] == "" && a[n2] == "x" && a[n3] == "x") return n1;
    else {
      n1 = n1 + 3;
      n2 = n2 + 3;
      n3 = n3 + 3;
    }
  }
  n1 = 0;
  n2 = 3;
  n3 = 6;
  for (i = 0; i < 3; i++) {
    if (a[n1] == "o" && a[n2] == "o" && a[n3] == "") return n3;
    else if (a[n1] == "o" && a[n2] == "" && a[n3] == "o") return n2;
    else if (a[n1] == "" && a[n2] == "o" && a[n3] == "o") return n1;
    else if (a[n1] == "x" && a[n2] == "x" && a[n3] == "") return n3;
    else if (a[n1] == "x" && a[n2] == "" && a[n3] == "x") return n2;
    else if (a[n1] == "" && a[n2] == "x" && a[n3] == "x") return n1;
    else {
      n1 = n1 + 1;
      n2 = n2 + 1;
      n3 = n3 + 1;
    }
  }
  return false;
}
