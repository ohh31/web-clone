//--------window 사용----------
function handleResize(){
    console.log("resize");
}
window.addEventListener("resize", handleResize);


//--------이벤트 발생------------
const BASE_COLOR = 'black';
const OTHER_COLOR = 'red';

// const title = document.getElementById('title');
const example1 = document.querySelector('#example1'); //노드의 첫 번째 인자
const example2 = document.querySelector('.example2'); //노드의 첫 번째 인자

example1.innerHTML = "This is JS practice";
example2.innerHTML = "Change the font style (only js)";
init();

function init(){
    example1.style.color = BASE_COLOR;
}

function handleClick(){
    const currentColor = example2.style.color;
    if(currentColor == BASE_COLOR){
        example2.style.color = OTHER_COLOR;
    } else if(currentColor == OTHER_COLOR){
        example2.style.color = BASE_COLOR;
    }else{
        example2.style.color = BASE_COLOR;
    }
}


example2.addEventListener("click", handleClick);


//--------이벤트 발생------------

const example3 = document.querySelector('#example3'); //노드의 첫 번째 인자
const CLICKED_CLASS = 'clicked';
example3.innerHTML = 'Change the font style (using css)';

function handleClicked(){
     example3.classList.toggle(CLICKED_CLASS);
    // const hasClass = example3.classList.contains(CLICKED_CLASS);

    // if(hasClass==false){
    //     example3.classList.add(CLICKED_CLASS);
    // } else{
    //     example3.classList.remove(CLICKED_CLASS);
    // }
}

example3.addEventListener("click", handleClicked);