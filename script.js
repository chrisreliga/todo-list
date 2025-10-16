'use strict';

const addTaskButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('taskInput');
const pendingTask = document.getElementById('pending-tasks');
const completedTask = document.getElementById('completed-tasks');
const deletedTask = document.getElementById('deleted-tasks');
const movementsContainer = document.getElementById('movements__container');

const checkmark = document.querySelector('.checkmark');
const flagButton = document.querySelector('.fa-solid.fa-flag');
const trashButton = document.querySelector('.fa-solid.fa-trash');

completedTask.textContent = 0;
pendingTask.textContent = 0;
deletedTask.textContent = 0;

let taskID = 0;
//
//
//
// Add Task Event Handler Function
const handTaskBtn = () => {
  const newTask = taskInput.value;
  taskID++;

  const html = `
    <div class="movements__row">

  <div class="movements__utilities">
    <!-- Checkbox -->
<label class="custom__checkbox">
    <input type="checkbox" id="task-${taskID}" />
    <span class="checkmark"></span>
</label>

    <!-- Date counter -->
    <div class="movements__date">today</div>
  </div>

    <!-- Task label -->
    <label for="task-${taskID}" class="task__label">${newTask}</label>

  <!-- Buttons -->
  <div class="movements__btns">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-trash"></i>
  </div>
</div>`;

  movementsContainer.insertAdjacentHTML('beforeend', html);

  pendingTask.textContent++;

  taskInput.value = '';
};
//
//
// Deleted Tasks Counter
movementsContainer.addEventListener('click', function (e) {
  const row = e.target.closest('.movements__row');

  if (e.target.matches('.fa-trash')) {
    if (!row) {
      return;
    }

    deletedTask.textContent++;
    pendingTask.textContent = Math.max(0, pendingTask.textContent - 1);

    row.classList.add('fade-out');
    setTimeout(() => row.remove(), 500);
  }

  if (e.target.matches('input[type="checkbox"]')) {
    row.classList.add('fade-out');
    setTimeout(() => row.remove(), 500);
    completedTask.textContent++;
    pendingTask.textContent = Math.max(0, pendingTask.textContent - 1);
  }
});
//
//
// Add A New Task-Click
addTaskButton.addEventListener('click', function () {
  const newTask = taskInput.value;

  if (newTask !== '') {
    handTaskBtn();
  } else if (newTask === '') {
    alert('Please Enter a New Task');
  }
});
//
//
// Add A New Task-Enter Key
taskInput.addEventListener('keydown', function (event) {
  const newTask = taskInput.value;

  if (event.key === 'Enter') {
    if (newTask !== '') {
      handTaskBtn();
    } else {
      alert('Please Enter a New Task');
    }
  }
});
//
//
//
