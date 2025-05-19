// Personalized greeting
const userName = localStorage.getItem('username') || prompt("What's your name?");
document.getElementById('userName').textContent = userName;
localStorage.setItem('username', userName);

// Real-time clock
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  document.getElementById('dateTime').textContent = formatted;
}
updateDateTime();
setInterval(updateDateTime, 60000);

// LocalStorage for tasks
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  tasks.push(task);
  saveTasks();
  renderTasks();
  input.value = '';
}

renderTasks();
