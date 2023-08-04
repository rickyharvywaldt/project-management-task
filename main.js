let form = document.getElementById('form');
let task = document.getElementById('task');
let msg = document.getElementById('msg');
let taskItems = document.getElementById('task_items');
let buttonTask = document.getElementById('button_task');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(task.value ===""){
        msg.innerHTML = "Task field is empty"
    } else {
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data['text'] = task.value;
    createTask();
};

let createTask = () => {
    taskItems.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    task.value = "";
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
};

let editTask = (e) => {
    task.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};