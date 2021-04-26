const body = document.querySelector("body");
const IMG_NUMBER = 4;

function createImage(imgNumber){
  const image = new Image();
  const imageSrc = `images/${imgNumber + 1}.jpg`;
  image.src = imageSrc;
  image.classList.add("bgImage");
  return image;
}

function paintImage(imgNumber) {  
  const image =  document.body.querySelector(".bgImage"); //!!document.getElementById("Anchor Id");
  console.log(image);
  const newImage = createImage(imgNumber);
  body.prepend(newImage);
  if(image !== null){
  body.removeChild(image);}
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  paintImage(number);
}

function init() {
  getRandom();
  setInterval(getRandom, 4000);
}

init();