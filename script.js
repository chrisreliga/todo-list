'use strict';

const addTaskBtn = document.querySelector('.add-task-btn');
const textInput = document.getElementById('task-input');
const inputRow = document.querySelector('.task-input-container');

let tasksArray = [];
let taskIdCounter = 0;

const taskList = document.querySelector('.task-list');
//
// Checking off & removing a task by clicking checkbox
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const btn = e.target.closest('.completed-btn');
    if (!btn) return;
    const id = Number(btn.dataset.id);

    tasksArray = tasksArray.filter((task) => task.id !== id);
    renderTasks();
  }
});
//
//
window.addEventListener('DOMContentLoaded', () => {
  textInput.focus();
});
//
//
// Render Tasks Function
function renderTasks() {
  const taskList = document.querySelector('.task-list');

  // Keep the input row in the list
  const inputRow = document.querySelector('.task-input-container');
  taskList.innerHTML = '';
  taskList.appendChild(inputRow);
  //
  //
  // Creating the task list item elements
  tasksArray.forEach((taskObj) => {
    const li = document.createElement('li');
    li.className = 'task-list-item';

    const completedBtn = document.createElement('button');
    completedBtn.classList.add('completed-btn');
    completedBtn.dataset.id = taskObj.id;

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
// Add Task Function
function addTask() {
  const newTask = textInput.value.trim();
  if (!newTask) return;

  tasksArray.unshift({ id: taskIdCounter++, text: newTask, completed: false });
  renderTasks();

  textInput.value = '';
  inputRow.classList.remove('show');
}
//
//
// Event Handlers
addTaskBtn.addEventListener('click', () => {
  inputRow.classList.add('show');
  textInput.focus();
});
//
//
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});
