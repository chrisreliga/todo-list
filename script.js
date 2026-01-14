'use strict';

const addTaskBtn = document.querySelector('.add-task-btn');
const newTaskInput = document.querySelector('.new-task-input');
const textInput = document.getElementById('task-input');

addTaskBtn.addEventListener('click', () => {
  newTaskInput.classList.add('show');

  textInput.focus();
});
