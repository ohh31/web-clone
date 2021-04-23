// const title = document.getElementById('title');
const BASE_COLOR = 'black';
const OTHER_COLOR = 'red';

const title = document.getElementsByName('title'); //노드의 첫 번째 인자
const title = document.querySelector('#title'); //노드의 첫 번째 인자
const description = document.querySelector('.description'); //노드의 첫 번째 인자
title.innerHTML = "Hi,From JS";
description.innerHTML = "This is JAVA practice";
init();

function init(){

    title.style.color = BASE_COLOR;
}

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor == BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else if(currentColor == OTHER_COLOR){
        title.style.color = BASE_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function handleResize(){
    console.log("resize");
}


title.addEventListener("click", handleClick);
window.addEventListener("resize", handleResize);