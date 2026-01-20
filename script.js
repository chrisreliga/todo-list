'use strict';

const addTaskBtn = document.querySelector('.add-task-btn');
const textInput = document.getElementById('task-input');
const inputRow = document.querySelector('.task-input-container');

window.addEventListener('DOMContentLoaded', () => {
  textInput.focus();
});

let tasksArray = [];
//
//
//
//
function renderTasks() {
  const taskList = document.querySelector('.task-list');

  // Keep the input row in the list
  const inputRow = document.querySelector('.task-input-container');
  taskList.innerHTML = '';
  taskList.appendChild(inputRow);
  //
  //
  tasksArray.forEach((taskObj) => {
    const li = document.createElement('li');
    li.className = 'task-list-item';

    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completed-btn');

    const icon = document.createElement('i');
    icon.className = 'fa-regular fa-circle checkbox';
    completedBtn.appendChild(icon);

    const textSpan = document.createElement('span');
    textSpan.textContent = taskObj.text;

    li.appendChild(completedBtn);
    li.appendChild(textSpan);
    taskList.appendChild(li);
  });
}
//
//
//
//
function addTask() {
  const newTask = textInput.value.trim();
  if (!newTask) return;

  tasksArray.unshift({ text: newTask, completed: false });
  renderTasks();

  textInput.value = '';
  inputRow.classList.remove('show');

  console.log(tasksArray[1]);
}
//
//
//
//
addTaskBtn.addEventListener('click', () => {
  inputRow.classList.add('show');
  textInput.focus();
});
//
//
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});
