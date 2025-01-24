const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Введите задачу');
    return;
  }

  const taskItem = document.createElement('li');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskItem.appendChild(taskContent);

  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';
  taskItem.appendChild(buttonContainer);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Удалить';
  removeButton.className = 'remove__button';
  buttonContainer.appendChild(removeButton);

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Готово';
  completeButton.className = 'complete__button';
  buttonContainer.appendChild(completeButton);

  taskList.appendChild(taskItem);

  taskInput.value = '';

  taskInput.focus();

  updateTaskNumbers();
});

taskList.addEventListener('click', (event) => {
  const button = event.target;

  if (button.classList.contains('remove__button')) {
    const taskItem = button.closest('li');
    taskList.removeChild(taskItem);
    updateTaskNumbers();
  }

  if (button.classList.contains('complete__button')) {
    const taskItem = button.closest('li');
    const taskContent = taskItem.querySelector('span');
    taskContent.classList.toggle('completed');
  }
});

function updateTaskNumbers() {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((task, index) => {
    const taskContent = task.querySelector('span');
    taskContent.textContent = `${index + 1}. ${
      taskContent.textContent.split('. ')[1] || taskContent.textContent
    }`;
  });
}
