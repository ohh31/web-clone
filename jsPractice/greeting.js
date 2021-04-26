const form = document.querySelector(".ans-form"); //클래스 태그 아이디
input = form.querySelector("input");
greeting = document.querySelector(".greeting");
toDo = document.querySelector(".toDo-container");

const USER_LN = "currentUser"
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LN, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Good Morning, ${text}`;
    toDo.style.display = 'block';
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LN);
    if (currentUser == null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();