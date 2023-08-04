let form = document.getElementById('form');
let task = document.getElementById('task');
let msg = document.getElementById('msg');
let taskItems = document.getElementById('task_items');
let buttonTask = document.getElementById('button_task');
let taskList = document.getElementById('task_list');
let buttonGroup = document.getElementById('button_group');
let newTask = document.getElementById('new_task');
let buttonNewTask = document.getElementById('button_task_input')
let buttonNewGroup = document.getElementById('button_group_input')

buttonTask.addEventListener('click', (e) => {
    e.preventDefault();
    formValidationSingle();
});

buttonGroup.addEventListener('click', (e) => {
    e.preventDefault();
    formValidationGroup();
});

buttonNewTask.addEventListener('click', (e) => {
    e.preventDefault();
    createNewTaskSingle();
});

let formValidationSingle = () => {
    if(task.value ===""){
        msg.innerHTML = "Task field is empty"
    } else {
        acceptDataSingle();
    }
};

let formValidationGroup = () => {
    if(task.value ===""){
        msg.innerHTML = "Task field is empty"
    } else {
        acceptDataGroup();
    }
};

let data = {};

let acceptDataSingle = () => {
    data['text'] = task.value;
    createTaskSingle();
};

let acceptDataGroup = () => {
    data['text'] = task.value;
    createTaskGroup();
};

let createTaskSingle = () => {
    taskList.innerHTML += `
    <div class="single-tasks">
        <p contenteditable="true" onKeyDown="onEnter(this)">${data.text}</p>
        <span class="options">
            <i onClick="editTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
            <i class="fas fa-ellipsis-v"></i>
        </span>
    </div>
    `;
    task.value = "";
    task.focus();
};

let createNewTaskSingle = () => {
    taskList.innerHTML += `
    <div class="single-tasks">
        <p contenteditable="true" onKeyDown="onEnter(this)" id="new_task"></p>
        <span class="options">
            <i onClick="editTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
            <i class="fas fa-ellipsis-v"></i>
        </span>
    </div>
    `;
    document.getElementById('new_task').focus();
};

let createTaskGroup = () => {
    taskList.innerHTML += `
    <div class="group-of-tasks">
        <p contenteditable="true" onKeyDown="onEnter(this)">${data.text}</p>
        <span class="options">
            <i onClick="editTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
            <i class="fas fa-ellipsis-v"></i>
        </span>
    </div>
    `;
    task.value = "";
    task.focus();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
};

let editTask = (e) => {
    task.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

function onEnter(targetElement) {
targetElement.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
      targetElement.blur();
    };
  });
};

