function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    li.classList.add('fadeOut');
    setTimeout(() => li.remove(), 200);
  };

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
