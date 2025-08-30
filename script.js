'use strict';

//Add a priority tier list feature where users can select from a dropdown High, Medium, or Low
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('taskInput');
const pendingTask = document.getElementById('pendingTasks');
const completedTask = document.getElementById('completedTasks');

completedTask.textContent = 0;
pendingTask.textContent = 0;
//
//
// Add A New Task-Click
addTaskButton.addEventListener('click', function () {
  const text = taskInput.value;

  const newDiv = document.createElement('div');
  newDiv.classList.add('newDiv');
  taskList.appendChild(newDiv);

  const newItem = document.createElement('li');
  newItem.textContent = text;

  const iconDiv = document.createElement('div');
  iconDiv.classList.add('iconDiv');
  const trashCan = document.createElement('i');
  trashCan.classList.add('fa-solid', 'fa-trash');
  const checkMark = document.createElement('i');
  checkMark.classList.add('fa-solid', 'fa-square-check');
  const flag = document.createElement('i');
  flag.classList.add('fa-solid', 'fa-flag');

  iconDiv.appendChild(flag);
  iconDiv.appendChild(trashCan);
  iconDiv.appendChild(checkMark);

  newDiv.appendChild(newItem);
  newDiv.appendChild(iconDiv);

  pendingTask.textContent++;

  taskInput.value = '';
});
//
//
// Add A New Task-Enter Key
taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const text = taskInput.value;

    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    taskList.appendChild(newDiv);

    const newItem = document.createElement('li');
    newItem.textContent = text;

    const iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv');
    const trashCan = document.createElement('i');
    trashCan.classList.add('fa-solid', 'fa-trash');
    const checkMark = document.createElement('i');
    checkMark.classList.add('fa-solid', 'fa-square-check');
    const flag = document.createElement('i');
    flag.classList.add('fa-solid', 'fa-flag');

    iconDiv.appendChild(flag);
    iconDiv.appendChild(trashCan);
    iconDiv.appendChild(checkMark);

    newDiv.appendChild(newItem);
    newDiv.appendChild(iconDiv);

    pendingTask.textContent++;

    taskInput.value = '';
  }
});
//
//
// Icons (Complete, Delete, Flag)
taskList.addEventListener('click', (e) => {
  let task = e.target.closest('.newDiv');
  let icons = e.target.closest('.iconDiv');

  if (e.target.classList.contains('fa-square-check')) {
    completedTask.textContent++;
    pendingTask.textContent--;
    task.remove();
  } else if (e.target.classList.contains('fa-trash')) {
    pendingTask.textContent--;
    task.remove();
  } else if (e.target.classList.contains('fa-flag')) {
    task.style.backgroundColor = 'rgba(246, 255, 0, 0.76)';
    icons.style.backgroundColor = 'rgba(246, 255, 0, 0)';
  }
});
