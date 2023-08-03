const input = document.querySelector('#task');
const task = document.querySelector('#button_task');
const group = document.querySelector('#button_group');
const del = document.querySelector('#button_delete');

task.addEventListener('click', () => {
    const tasks = document.querySelector('#task_items');
    const newTR = document.createElement('tr');
    newTR.classList.add('new-task');
    newTR.innerHTML = '<td>' + input.value + '<button class="delete" id="button_delete">del</button>' + '</td>';
    tasks.appendChild(newTR);
    input.value = "";
    input.focus();
});

group.addEventListener('click', () => {
    const tasks = document.querySelector('#task_items');
    const newTR = document.createElement('tr');
    newTR.innerHTML = '<th>' + input.value + '<button class="delete" id="button_delete">del</button>' + '</th>';
    tasks.appendChild(newTR);
    input.value = "";
    input.focus();
});

del.addEventListener('click', () => {
    let tasks = document.querySelector('#task_items');
    let tasksDel = document.querySelector('.new-task');
    tasks.removeChild(tasksDel);
    console.log('clicked');
});