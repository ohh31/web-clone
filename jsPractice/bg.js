const body = document.querySelector("body");

const IMG_NUMBER = 4;

//이미지가 중복되지 않게 랜덤으로 나옴 

function changeBg(){
  
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  // image.classList.replace("bgImage","bgImage")
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  console.log(number);
  return number;
}

function init() {
  const randomNumber = getRandom();
  
}

init();
// setInterval(init, 1000);