let form = document.getElementById('form');
let task = document.getElementById('task');
let msg = document.getElementById('msg');
let taskItems = document.getElementById('task_items');
let buttonTask = document.getElementById('button_task');
let taskGroup = document.getElementById('task_group');
let buttonGroup = document.getElementById('button_group');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     formValidation();
// });

buttonTask.addEventListener('click', (e) => {
    e.preventDefault();
    formValidationSingle();
});

buttonGroup.addEventListener('click', (e) => {
    e.preventDefault();
    formValidationGroup();
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
    taskItems.innerHTML += `
    <div>
        <p contenteditable="true">${data.text}</p>
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

let createTaskGroup = () => {
    taskGroup.innerHTML += `
    <div>
        <p contenteditable="true">${data.text}</p>
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


