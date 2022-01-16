document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const todoForm = document.getElementById('create-task-form');
  todoForm.addEventListener('submit', handleSubmit);

});

function handleSubmit(event) {
  event.preventDefault();

  const taskList = document.getElementById('tasks');
  const task = document.createElement('li');
  task.textContent = event.target.description.value;
  taskList.append(task);

}