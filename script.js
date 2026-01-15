'use strict';

const addTaskBtn = document.querySelector('.add-task-btn');
const textInput = document.getElementById('task-input');
const taskInputContainer = document.querySelector('.task-input-container');

let tasksArray = [];

function renderTasks() {
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  tasksArray.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task-list-item';
    li.textContent = task;
    taskList.appendChild(li);
  });
}

function addTask() {
  const newTask = textInput.value.trim();
  if (!newTask) return;

  tasksArray.unshift(newTask);
  renderTasks();

  textInput.value = '';
  taskInputContainer.classList.remove('show');
}

addTaskBtn.addEventListener('click', () => {
  taskInputContainer.classList.add('show');
  textInput.focus();
});

textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

textInput.addEventListener('blur', addTask());
