// Utility functions for LocalStorage
function getFromLocalStorage(key, defaultValue) {
  return JSON.parse(localStorage.getItem(key)) || defaultValue;
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Personalized greeting
const userName = getFromLocalStorage('username', prompt("What's your name?"));
document.getElementById('userName').textContent = userName;
saveToLocalStorage('username', userName);

// Real-time clock
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  document.getElementById('dateTime').textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 60000);

// Task management
const taskList = document.getElementById('taskList');
let tasks = getFromLocalStorage('tasks', []);

// Save tasks to LocalStorage
function saveTasks() {
  saveToLocalStorage('tasks', tasks);
}

// Render tasks efficiently
function renderTasks() {
  taskList.innerHTML = ''; // Clear the task list
  const fragment = document.createDocumentFragment();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'COMPLETED';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1); // Remove task
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    fragment.appendChild(li);
  });

  taskList.appendChild(fragment); // Batch update DOM
}

// Add task with input validation
function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();

  if (task === '') {
    alert('Task cannot be empty!'); // Provide feedback
    return;
  }

  tasks.push(task); // Add new task
  saveTasks();
  renderTasks();
  input.value = ''; // Clear input field
}

// Initial render
renderTasks();
