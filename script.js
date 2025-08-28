'use strict';

//Add a priority tier list feature where users can select from a dropdown High, Medium, or Low
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('taskInput');

addTaskButton.addEventListener('click', function () {
  const text = taskInput.value;

  const newDiv = document.createElement('div');
  taskList.appendChild(newDiv);

  const newItem = document.createElement('li');
  newItem.textContent = text;

  const iconDiv = document.createElement('div');
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

  taskInput.value = '';
});

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const text = taskInput.value;

    const newDiv = document.createElement('div');
    taskList.appendChild(newDiv);

    const newItem = document.createElement('li');
    newItem.textContent = text;

    const iconDiv = document.createElement('div');
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

    taskInput.value = '';
  }
});
