const input = document.querySelector('#task');
const task = document.querySelector('#button_task');
const group = document.querySelector('#button_group');

function delButton() {
    let tasks = document.querySelector('#task_items');
    let tasksDel = document.querySelector('.new-task');
    tasks.removeChild(tasksDel);
}

function delButtonGroup() {
    let tasks = document.querySelector('#task_items');
    let tasksDelGroup = document.querySelector('.new-task-group');
    tasks.removeChild(tasksDelGroup);
}

task.addEventListener('click', () => {
    const tasks = document.querySelector('#task_items');
    const newTR = document.createElement('tr');
    const newTD = document.createElement('td');
    const newButton = document.createElement('button');
    newTR.classList.add('new-task');
    newButton.classList.add('delete');
    newButton.id = 'button_delete';
    newButton.textContent = "del";
    newButton.addEventListener('click', delButton);
    newTD.textContent = input.value;
    tasks.appendChild(newTR);
    newTR.appendChild(newTD);
    newTD.appendChild(newButton);
    input.value = "";
    input.focus();
});

// Shorter code using innerHTML instead of createElement, but I haven't figured out how to include the addEventListener for the new delete button
// task.addEventListener('click', () => {
//     const tasks = document.querySelector('#task_items');
//     const newTR = document.createElement('tr');
//     newTR.classList.add('new-task');
//     newTR.innerHTML = '<td>' + input.value + '<button class="delete" id="button_delete">del</button>' + '</td>';
//     tasks.appendChild(newTR);
//     input.value = "";
//     input.focus();
// });

group.addEventListener('click', () => {
    const tasks = document.querySelector('#task_items');
    const newTR = document.createElement('tr');
    const newTH = document.createElement('th');
    const newButton = document.createElement('button');
    newTR.classList.add('new-task-group');
    newButton.classList.add('delete');
    newButton.id = 'button_delete_group';
    newButton.textContent = "del";
    newButton.addEventListener('click', delButtonGroup);
    newTH.textContent = input.value;
    tasks.appendChild(newTR);
    newTR.appendChild(newTH);
    newTH.appendChild(newButton);
    input.value = "";
    input.focus();
});

// Shorter code using innerHTML instead of createElement, but I haven't figured out how to include the addEventListener for the new delete button
// group.addEventListener('click', () => {
//     const tasks = document.querySelector('#task_items');
//     const newTR = document.createElement('tr');
//     newTR.innerHTML = '<th>' + input.value + '<button class="delete" id="button_delete">del</button>' + '</th>';
//     tasks.appendChild(newTR);
//     input.value = "";
//     input.focus();
// });

document.addEventListener('DOMContentLoaded', () => {
    let del = document.querySelector('#button_delete');
  
    if (del) {
      del.addEventListener('click', function () {
        console.log('Button clicked!');
      });
    } else {
      console.error("'#button_delete' not found.");
    }
  });
