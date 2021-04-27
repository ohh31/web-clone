const toDoForm = document.querySelector(".toDo-form"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".toDo-list");

const TODOS_LS = "toDos"
let toDos = [];


function saveTodo(text){
    localStorage.setItem(TODOS_LS, JSON.stringify(text));
}

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    cleanToDos= toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodo(toDos);
    console.log(cleanToDos);
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "x"
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const newId = toDos.length + 1;
    li.id = newId;
    const toDoObj = {
        text : text,
        id : newId,
    }
    toDos.push(toDoObj);
    saveTodo(toDos);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDo) {
            console.log(toDo.text);
            paintTodo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
    toDoList.addEventListener("click",deleteTodo);
}

init();
